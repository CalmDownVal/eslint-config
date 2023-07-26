import TypeScriptPlugin from '@typescript-eslint/eslint-plugin';
import ImportPlugin from 'eslint-plugin-import';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import AJV from 'ajv';

import coreConfig from '../index.js';
import importConfig from '../import.js';
import typeScriptConfig from '../typescript.js';

const CONFIGS = [
	{
		name: 'core',
		prefix: '',
		configuredRules: coreConfig.rules,
		moduleRules: Array.from(builtinRules.entries())
	},
	{
		name: 'import',
		prefix: 'import/',
		configuredRules: importConfig.rules,
		moduleRules: Object.entries(ImportPlugin.rules)
	},
	{
		name: 'TypeScript',
		prefix: '@typescript-eslint/',
		configuredRules: typeScriptConfig.overrides[0].rules,
		moduleRules: Object.entries(TypeScriptPlugin.rules)
	}
];


// gather a map of all available rules with prefixes
// ---

const AVAILABLE_RULES = {};
CONFIGS.forEach(config => {
	for (const [ ruleName, rule ] of config.moduleRules) {
		AVAILABLE_RULES[config.prefix + ruleName] = rule;
	}
});


// check the existence and schema of existing configs
// ---

const HAS_SEEN_CONFIG_FOR = {};
const ajv = new AJV({ strict: false });

function compileSchema(schema) {
	try {
		return ajv.compile(schema);
	}
	catch (ex) {
		console.error('Could not compile schema:');
		console.error(JSON.stringify(schema, null, 2));
		console.error(ex);
		return () => true;
	}
}

const validateSeverity = compileSchema({
	enum: [
		'off',
		'warn',
		'error'
	]
});

CONFIGS.forEach(({ name: configName, configuredRules }) => {
	for (const ruleName in configuredRules) {
		if (Object.hasOwn(AVAILABLE_RULES, ruleName)) {
			HAS_SEEN_CONFIG_FOR[ruleName] = true;

			let config = configuredRules[ruleName];
			if (!Array.isArray(config)) {
				config = [ config ];
			}

			// validate severity
			const severity = config[0];
			if (!validateSeverity(severity)) {
				console.error(`Invalid severity for rule '${ruleName}' in '${configName}':`);
				console.error(validateSeverity.errors);
				console.error('\n');
				continue;
			}

			// validate schema of options
			if (severity !== 'off') {
				const rule = AVAILABLE_RULES[ruleName];
				const schema = rule.meta.schema;
				const options = config.slice(1);

				if (Array.isArray(schema)) {
					if (schema.length < options.length) {
						console.error(`Invalid options for '${ruleName}' in '${configName}':`);
						console.error(`The rule only expects ${schema.length} options but ${options.length} were configured.`);
						console.error('\n');
					}
					else if (schema.length > 0) {
						const validate = compileSchema({
							type: 'array',
							items: schema
						});

						if (!validate(options)) {
							console.error(`Invalid options for '${ruleName}' in '${configName}':`);
							console.error(validate.errors);
							console.error('\n');
						}
					}
				}
				else if (typeof schema === 'object' && schema !== null) {
					const validate = compileSchema(schema);
					if (!validate(options)) {
						console.error(`Invalid options for '${ruleName}' in '${configName}':`);
						console.error(validate.errors);
						console.error('\n');
					}
				}
			}
		}
		else {
			console.error(`Rule '${ruleName}' is configured in '${configName}' but does not exist.`);
		}
	}
});

const missingConfig = [];
for (const ruleName in AVAILABLE_RULES) {
	if (!HAS_SEEN_CONFIG_FOR[ruleName]) {
		if (AVAILABLE_RULES[ruleName].meta?.deprecated !== true) {
			missingConfig.push(ruleName);
		}
	}
}

if (missingConfig.length > 0) {
	console.warn('The following rules are available but have not been configured:');
	missingConfig.forEach(ruleName => console.warn(`- ${ruleName}`));
}
