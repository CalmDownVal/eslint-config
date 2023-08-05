// This set of rules overrides some configuration from the import rule set for
// use with TypeScript, as TS already does a lot of checks on its own (and often
// better so).
// ---

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const rules = {
	// ensure imports point to a file/module that can be resolved
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
	'import/no-unresolved': OFF,

	// ensure named imports correspond to a named export in the remote file
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
	'import/named': OFF,

	// ensure imported namespaces contain dereferenced properties as they are dereferenced
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
	'import/namespace': OFF,

	// report any invalid exports, i.e. re-export of the same name
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
	'import/export': OFF
};

module.exports = {
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			plugins: [
				'eslint-plugin-import'
			],
			rules,
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': [ '.ts', '.tsx', '.mts', '.cts' ]
				},
				'import/resolver': {
					'@calmdownval/eslint-import-resolver-typescript': {
						alwaysTryTypes: true,

						// extending configs may need to reconfigure this path/glob
						// https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
						project: './tsconfig.json'
					}
				}
			}
		}
	]
};
