import TypeScriptPlugin from '@typescript-eslint/eslint-plugin';
import ImportPlugin from 'eslint-plugin-import';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import AJV from 'ajv';

import coreConfig from '../index.js';
import importConfig from '../import.js';
import typeScriptCoreConfig from '../typescript/index.js';
import typeScriptImportConfig from '../typescript/import.js';

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
		name: 'TypeScript/core',
		prefix: '@typescript-eslint/',
		configuredRules: typeScriptCoreConfig.overrides[0].rules,
		moduleRules: Object.entries(TypeScriptPlugin.rules)
	},
	{
		name: 'TypeScript/import',
		prefix: 'import/',
		configuredRules: typeScriptImportConfig.overrides[0].rules,
		moduleRules: Object.entries(ImportPlugin.rules)
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

function schemaCompile(schema) {
	try {
		// uncomment to require *all* available options to be set explicitly
		// schemaMakeRequired(schema);
		return ajv.compile(schema);
	}
	catch (ex) {
		console.error('Could not compile schema:');
		console.error(JSON.stringify(schema, null, 2));
		console.error(ex);
		return () => true;
	}
}

function schemaMakeRequired(schema, skipPropertyCheck = false) {
	if (schema === null || typeof schema !== 'object') {
		return;
	}

	const declaresProperties = !skipPropertyCheck && Boolean(schema.properties);
	for (const key of Object.getOwnPropertyNames(schema)) {
		schemaMakeRequired(schema[key], declaresProperties && key === 'properties');
	}

	if (declaresProperties) {
		schema.additionalProperties = false;
		schema.required = Array.from(Object.getOwnPropertyNames(schema.properties));
	}
}

function isDeprecated(ruleName) {
	return AVAILABLE_RULES[ruleName].meta?.deprecated === true;
}

const validateSeverity = schemaCompile({
	enum: [
		'off',
		'warn',
		'error'
	]
});

CONFIGS.forEach(({ name: configName, configuredRules, prefix }) => {
	for (const ruleName in configuredRules) {
		if (!Object.hasOwn(AVAILABLE_RULES, ruleName)) {
			console.error(`Rule '${ruleName}' does not exist but is configured in '${configName}'.`);
			continue;
		}

		HAS_SEEN_CONFIG_FOR[ruleName] = true;

		// check deprecation
		if (isDeprecated(ruleName)) {
			console.error(`Rule '${ruleName}' is deprecated but is still configured in '${configName}'.`);
			console.error();
		}

		// check for possible built-in rule clash
		if (prefix && ruleName.startsWith(prefix)) {
			const builtInRuleName = ruleName.slice(prefix.length);
			if (
				Object.hasOwn(AVAILABLE_RULES, builtInRuleName) &&
				!isDeprecated(builtInRuleName) &&
				!Object.hasOwn(configuredRules, builtInRuleName)
			) {
				console.warn(`Rule '${ruleName}' seems to override built-in '${builtInRuleName}', but it has not been re-configured.`);
				console.warn();
			}
		}

		// normalize config
		let config = configuredRules[ruleName];
		if (!Array.isArray(config)) {
			config = [ config ];
		}

		// validate severity
		const severity = config[0];
		if (!validateSeverity(severity)) {
			console.error(`Invalid severity for rule '${ruleName}' in '${configName}':`);
			console.error(validateSeverity.errors);
			console.error();
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
					console.error();
				}
				else if (schema.length > 0) {
					const validate = schemaCompile({
						type: 'array',
						items: schema
					});

					if (!validate(options)) {
						console.error(`Invalid options for '${ruleName}' in '${configName}':`);
						console.error(validate.errors);
						console.error();
						continue;
					}

					if (options.length < schema.length) {
						console.warn(`Rule '${ruleName}' in ${configName} does not explicitly declare all available options.`);
						console.warn();
					}
				}
			}
			else if (typeof schema === 'object' && schema !== null) {
				const validate = schemaCompile(schema);
				if (!validate(options)) {
					console.error(`Invalid options for '${ruleName}' in '${configName}':`);
					console.error(validate.errors);
					console.error();
				}
			}
		}
	}
});

const missingConfig = [];
for (const ruleName in AVAILABLE_RULES) {
	if (!HAS_SEEN_CONFIG_FOR[ruleName] && !isDeprecated(ruleName)) {
		missingConfig.push(ruleName);
	}
}

if (missingConfig.length > 0) {
	console.warn('The following rules are available but have not been configured:');
	missingConfig.forEach(ruleName => console.warn(`- ${ruleName}`));
}
