// this set of rules configures all rules of the ESLint Import plugin.
// ---

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const rules = {
	// ensure imports point to a file/module that can be resolved
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
	'import/no-unresolved': [
		ERROR,
		{
			commonjs: false,
			amd: false,
			caseSensitive: true
		}
	],

	// ensure named imports correspond to a named export in the remote file
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
	'import/named': ERROR,

	// ensure a default export is present, given a default import
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
	'import/default': ERROR,

	// ensure imported namespaces contain dereferenced properties as they are dereferenced
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
	'import/namespace': [
		ERROR,
		{ allowComputed: true }
	],

	// restrict which files can be imported in a given folder
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
	'import/no-restricted-paths': OFF,

	// forbid import of modules using absolute paths
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
	'import/no-absolute-path': [
		WARN,
		{
			esmodule: true,
			commonjs: false,
			amd: false
		}
	],

	// forbid require() calls with expressions
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
	'import/no-dynamic-require': OFF,

	// prevent importing the submodules of other modules
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
	'import/no-internal-modules': OFF,

	// Forbid importing packages through relative paths.
	// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
	'import/no-relative-packages': ERROR,

	// forbid webpack loader syntax in imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
	'import/no-webpack-loader-syntax': OFF,

	// forbid a module from importing itself
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
	'import/no-self-import': ERROR,

	// forbid a module from importing a module with a dependency path back to itself
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
	'import/no-cycle': [
		ERROR,
		{
			maxDepth: 16,
			ignoreExternal: true
		}
	],

	// prevent unnecessary path segments in import and require statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
	'import/no-useless-path-segments': [
		WARN,
		{
			noUselessIndex: true,
			commonjs: false
		}
	],

	// forbid importing modules from parent directories
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
	// NOTE: false positives on paths with `~/*`
	'import/no-relative-parent-imports': OFF,

	// report any invalid exports, i.e. re-export of the same name
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
	'import/export': ERROR,

	// report use of exported name as identifier of default export
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
	'import/no-named-as-default': WARN,

	// report use of exported name as property of default export
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
	'import/no-named-as-default-member': WARN,

	// report imported names marked with @deprecated documentation tag
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
	'import/no-deprecated': WARN,

	// forbid the use of extraneous packages
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
	'import/no-extraneous-dependencies': OFF,

	// forbid the use of mutable exports with var or let
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
	'import/no-mutable-exports': ERROR,

	// report modules without exports, or exports without matching import in another module
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
	'import/no-unused-modules': OFF,

	// report potentially ambiguous parse goal (script vs. module)
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
	'import/unambiguous': WARN,

	// report CommonJS require calls and `module.exports` or `exports.*`
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
	'import/no-commonjs': WARN,

	// report AMD require and define calls
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
	'import/no-amd': WARN,

	// no Node.js builtin modules
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
	'import/no-nodejs-modules': OFF,

	// ensure all imports appear before other statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
	// NOTE: overridden by 'import/order'
	'import/first': OFF,

	// ensure all exports appear after other statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
	'import/exports-last': OFF,

	// report repeated import of the same module in multiple places
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
	'import/no-duplicates': [
		WARN,
		{ considerQueryString: true }
	],

	// forbid namespace (a.k.a. "wildcard" *) imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
	'import/no-namespace': OFF,

	// ensure consistent use of file extension within the import path
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
	'import/extensions': OFF,

	// enforce a convention in module import order
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
	'import/order': [
		WARN,
		{
			groups: [
				'builtin',
				'external',
				'internal',
				[ 'sibling', 'parent', 'index' ]
			],
			pathGroups: [
				{
					pattern: '~/**',
					group: 'internal',
					position: 'after'
				}
			],
			distinctGroup: true,
			pathGroupsExcludedImportTypes: [],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				orderImportKind: 'desc',
				caseInsensitive: true
			},
			warnOnUnassignedImports: true
		}
	],

	// enforce a newline after import statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
	'import/newline-after-import': [
		WARN,
		{ count: 1 }
	],

	// prefer a default export if module exports a single name
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
	'import/prefer-default-export': OFF,

	// limit the maximum number of dependencies a module can have
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
	'import/max-dependencies': OFF,

	// forbid unassigned imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
	'import/no-unassigned-import': OFF,

	// forbid named default exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
	'import/no-named-default': WARN,

	// forbid default exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
	'import/no-default-export': WARN,

	// forbid named exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
	'import/no-named-export': OFF,

	// forbid anonymous values as default exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
	'import/no-anonymous-default-export': OFF,

	// prefer named exports to be grouped together in a single export declaration
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
	'import/group-exports': OFF,

	// enforce a leading comment with the webpackChunkName for dynamic imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
	'import/dynamic-import-chunkname': OFF,

	// Enforce or ban the use of inline type-only markers for named imports.
	// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
	'import/consistent-type-specifier-style': OFF,

	// Forbid import statements with CommonJS module.exports.
	// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
	'import/no-import-module-exports': ERROR,

	// Forbid empty named import blocks.
	// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
	'import/no-empty-named-blocks': WARN
};

module.exports = {
	plugins: [
		'eslint-plugin-import'
	],
	rules
};
