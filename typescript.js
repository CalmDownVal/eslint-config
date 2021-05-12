const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const rules = {
	// ████████╗██╗   ██╗██████╗ ███████╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
	// ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
	//    ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗██║     ██████╔╝██║██████╔╝   ██║
	//    ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
	//    ██║      ██║   ██║     ███████╗███████║╚██████╗██║  ██║██║██║        ██║
	//    ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝

	// turn off or reconfigure core rules made redundant by the use of TypeScript
	'array-callback-return': OFF,
	'strict': [
		WARN,
		'never'
	],

	// require that member overloads be consecutive
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
	'@typescript-eslint/adjacent-overload-signatures': WARN,

	// requires using either T[] or Array<T> for arrays
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
	'@typescript-eslint/array-type': [
		WARN,
		{
			default: 'array',
			readonly: 'array'
		}
	],

	// disallows awaiting a value that is not a Thenable
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
	'@typescript-eslint/await-thenable': WARN,

	// bans @ts-<directive> comments from being used or requires descriptions after directive
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
	'@typescript-eslint/ban-ts-comment': [
		WARN,
		{
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': 'allow-with-description',
			'ts-check': 'allow-with-description',
			minimumDescriptionLength: 5
		}
	],

	// bans // tslint:<rule-flag> comments from being used
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
	'@typescript-eslint/ban-tslint-comment': OFF,

	// bans specific types from being used
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
	'@typescript-eslint/ban-types': [
		WARN,
		{
			extendDefaults: false,
			types: {
				String: {
					fixWith: 'string',
					message: 'Use `string` (lowercase) instead.'
				},
				Boolean: {
					fixWith: 'boolean',
					message: 'Use `boolean` (lowercase) instead.'
				},
				Number: {
					fixWith: 'number',
					message: 'Use `number` (lowercase) instead.'
				},
				Symbol: {
					fixWith: 'symbol',
					message: 'Use `symbol` (lowercase) instead.'
				},
				Function: {
					fixWith: '(...args: any) => any',
					message: [
						'The `Function` type accepts any function-like value.',
						'It provides no type safety when calling the function, which can be a common source of bugs.',
						'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
						'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
					].join('\n')
				},
				Object: {
					fixWith: 'Record<string, unknown>',
					message: [
						'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
						'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
						'- If you want a type meaning "any value", you probably want `unknown` instead.'
					].join('\n')
				},
				object: {
					fixWith: 'Record<string, unknown>',
					message: [
						'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
						'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.'
					].join('\n')
				},
			}
		}
	],

	// ensures that literals on classes are exposed in a consistent style
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
	'@typescript-eslint/class-literal-property-style': [
		WARN,
		'fields'
	],

	// enforce or disallow the use of the record type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
	'@typescript-eslint/consistent-indexed-object-style': OFF,

	// enforces consistent usage of type assertions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
	'@typescript-eslint/consistent-type-assertions': OFF,

	// consistent with type definition either interface or type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
	'@typescript-eslint/consistent-type-definitions': [
		WARN,
		'interface'
	],

	// enforces consistent usage of type imports
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
	// NOTE: currently has no option to allow regular imports when at least one of imported objects is not a type
	'@typescript-eslint/consistent-type-imports': OFF,

	// require explicit return types on functions and class methods
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
	'@typescript-eslint/explicit-function-return-type': OFF,

	// require explicit accessibility modifiers on class properties and methods
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
	'@typescript-eslint/explicit-member-accessibility': [
		WARN,
		{
			accessibility: 'explicit',
			ignoredMethodNames: [],
			overrides: {}
		}
	],

	// require explicit return and argument types on exported functions' and classes' public class methods
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
	'@typescript-eslint/explicit-module-boundary-types': OFF,

	// require a specific member delimiter style for interfaces and type literals
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
	'@typescript-eslint/member-delimiter-style': [
		WARN,
		{
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false
			},
			overrides: {}
		}
	],

	// require a consistent member declaration order
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
	'@typescript-eslint/member-ordering': [
		WARN,
		{
			default: {
				order: 'as-written',
				memberTypes: [
					'signature',
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'public-decorated-field',
					'protected-decorated-field',
					'private-decorated-field',
					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					'public-abstract-field',
					'protected-abstract-field',
					'private-abstract-field',
					'public-field',
					'protected-field',
					'private-field',
					'static-field',
					'instance-field',
					'abstract-field',
					'decorated-field',
					'field',
					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'public-decorated-method',
					'protected-decorated-method',
					'private-decorated-method',
					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
					'public-abstract-method',
					'protected-abstract-method',
					'private-abstract-method',
					'public-method',
					'protected-method',
					'private-method',
					'static-method',
					'instance-method',
					'abstract-method',
					'decorated-method',
					'method'
				]
			}
		}
	],

	// enforces using a particular method signature syntax
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
	'@typescript-eslint/method-signature-style': OFF,

	// enforces naming conventions for everything across a codebase
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
	'camelcase': OFF,
	'@typescript-eslint/naming-convention': [
		WARN,
		// force camelCase for all values
		{
			selector: [ 'default' ],
			format: [ 'camelCase' ],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		},

		// force PascalCase for all types
		{
			selector: [ 'typeLike' ],
			format: [ 'PascalCase' ]
		},

		// override to allow _ and __ prefixes for values
		{
			selector: [ 'variableLike', 'memberLike' ],
			format: [ 'camelCase' ],
			leadingUnderscore: 'allowSingleOrDouble'
		},

		// override for global and static member constants
		{
			selector: [ 'variableLike' ],
			modifiers: [ 'const', 'global' ],
			format: [ 'camelCase', 'PascalCase', 'UPPER_CASE' ],
			leadingUnderscore: 'forbid'
		},
		{
			selector: [ 'memberLike' ],
			modifiers: [ 'static' ],
			format: [ 'camelCase', 'UPPER_CASE' ]
		},

		// force PascalCase for enums
		{
			selector: [ 'enumMember' ],
			format: [ 'PascalCase' ],
			leadingUnderscore: 'forbid'
		},

		// allow exotic naming when in quotes (useful for http headers etc.)
		{
			selector: [ 'objectLiteralProperty' ],
			modifiers: [ 'requiresQuotes' ],
			format: null
		}
	],

	// requires that .toString() is only called on objects which provide useful information when stringified
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
	'@typescript-eslint/no-base-to-string': OFF,

	// disallow non-null assertion in locations that may be confusing
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
	'@typescript-eslint/no-confusing-non-null-assertion': WARN,

	// requires expressions of type void to appear in statement position
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
	'@typescript-eslint/no-confusing-void-expression': OFF,

	// disallow the delete operator with computed key expressions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
	'@typescript-eslint/no-dynamic-delete': OFF,

	// disallow the declaration of empty interfaces
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
	'@typescript-eslint/no-empty-interface': [
		WARN,
		{ allowSingleExtends: true }
	],

	// disallow usage of the any type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
	'@typescript-eslint/no-explicit-any': OFF,

	// disallow extra non-null assertion
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
	'@typescript-eslint/no-extra-non-null-assertion': WARN,

	// forbids the use of classes as namespaces
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
	'@typescript-eslint/no-extraneous-class': [
		WARN,
		{
			allowConstructorOnly: false,
			allowEmpty: false,
			allowStaticOnly: false,
			allowWithDecorator: true
		}
	],

	// requires Promise-like values to be handled appropriately
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
	'@typescript-eslint/no-floating-promises': [
		WARN,
		{
			ignoreVoid: true,
			ignoreIIFE: true
		}
	],

	// disallow iterating over an array with a for-in loop
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
	'@typescript-eslint/no-for-in-array': WARN,

	// disallow usage of the implicit any type in catch clauses
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
	'@typescript-eslint/no-implicit-any-catch': OFF,

	// disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
	'@typescript-eslint/no-inferrable-types': [
		WARN,
		{
			ignoreParameters: false,
			ignoreProperties: false
		}
	],

	// disallows usage of void type outside of generic or return types
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
	'@typescript-eslint/no-invalid-void-type': OFF,

	// enforce valid definition of new and constructor
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
	'@typescript-eslint/no-misused-new': WARN,

	// avoid using promises in places not designed to handle them
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
	'@typescript-eslint/no-misused-promises': [
		WARN,
		{
			checksVoidReturn: true,
			checksConditionals: true
		}
	],

	// disallow the use of custom TypeScript modules and namespaces
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
	'@typescript-eslint/no-namespace': [
		WARN,
		{
			allowDeclarations: false,
			allowDefinitionFiles: true
		}
	],

	// disallows using a non-null assertion after an optional chain expression
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
	'@typescript-eslint/no-non-null-asserted-optional-chain': WARN,

	// disallows non-null assertions using the ! postfix operator
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
	'@typescript-eslint/no-non-null-assertion': OFF,

	// disallow the use of parameter properties in class constructors
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
	'@typescript-eslint/no-parameter-properties': OFF,

	// disallows invocation of require()
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
	'@typescript-eslint/no-require-imports': WARN,

	// disallow aliasing this
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
	'@typescript-eslint/no-this-alias': [
		WARN,
		{
			allowDestructuring: true,
			allowedNames: []
		}
	],

	// disallow the use of type aliases
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
	'@typescript-eslint/no-type-alias': OFF,

	// flags unnecessary equality comparisons against boolean literals
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
		WARN,
		{
			allowComparingNullableBooleansToTrue: true,
			allowComparingNullableBooleansToFalse: true
		}
	],

	// prevents conditionals where the type is always truthy or always falsy
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
	'@typescript-eslint/no-unnecessary-condition': [
		WARN,
		{ allowConstantLoopConditions: true }
	],

	// warns when a namespace qualifier is unnecessary
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
	'@typescript-eslint/no-unnecessary-qualifier': OFF,

	// enforces that type arguments will not be used if not required
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
	'@typescript-eslint/no-unnecessary-type-arguments': WARN,

	// warns if a type assertion does not change the type of an expression
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
	'@typescript-eslint/no-unnecessary-type-assertion': WARN,

	// disallows unnecessary constraints on generic types
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
	'@typescript-eslint/no-unnecessary-type-constraint': WARN,

	// disallows assigning any to variables and properties
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
	'@typescript-eslint/no-unsafe-assignment': OFF,

	// disallows calling an any type value
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
	'@typescript-eslint/no-unsafe-call': OFF,

	// disallows member access on any typed variables
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
	'@typescript-eslint/no-unsafe-member-access': OFF,

	// disallows returning any from a function
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
	'@typescript-eslint/no-unsafe-return': OFF,

	// disallows the use of require statements except in import statements
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
	'@typescript-eslint/no-var-requires': WARN,

	// prefers a non-null assertion over explicit type cast when possible
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
	'@typescript-eslint/non-nullable-type-assertion-style': WARN,

	// prefer usage of as const over literal type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
	'@typescript-eslint/prefer-as-const': WARN,

	// prefer initializing each enums member value
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
	'@typescript-eslint/prefer-enum-initializers': OFF,

	// prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
	'@typescript-eslint/prefer-for-of': OFF,

	// use function types instead of interfaces with call signatures
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
	'@typescript-eslint/prefer-function-type': OFF,

	// enforce includes method over indexOf method
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
	'@typescript-eslint/prefer-includes': WARN,

	// require that all enum members be literal values to prevent unintended enum member name shadow issues
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
	'@typescript-eslint/prefer-literal-enum-member': WARN,

	// require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
	'@typescript-eslint/prefer-namespace-keyword': WARN,

	// enforce the usage of the nullish coalescing operator instead of logical chaining
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
	'@typescript-eslint/prefer-nullish-coalescing': [
		WARN,
		{
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true
		}
	],

	// prefer using concise optional chain expressions instead of chained logical ands
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
	'@typescript-eslint/prefer-optional-chain': WARN,

	// requires that private members are marked as readonly if they're never modified outside of the constructor
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
	'@typescript-eslint/prefer-readonly': [
		WARN,
		{ onlyInlineLambdas: false }
	],

	// requires that function parameters are typed as readonly to prevent accidental mutation of inputs
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
	// NOTE: flags most built-in types like Buffer, Error, etc.
	'@typescript-eslint/prefer-readonly-parameter-types': OFF,

	// prefer using type parameter when calling Array#reduce instead of casting
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
	'@typescript-eslint/prefer-reduce-type-parameter': WARN,

	// enforce that RegExp#exec is used instead of String#match if no global flag is provided
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
	'@typescript-eslint/prefer-regexp-exec': WARN,

	// enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
	'@typescript-eslint/prefer-string-starts-ends-with': WARN,

	// recommends using @ts-expect-error over @ts-ignore
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
	'@typescript-eslint/prefer-ts-expect-error': ERROR,

	// requires any function or method that returns a Promise to be marked async
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
	'@typescript-eslint/promise-function-async': OFF,

	// requires Array#sort calls to always provide a compareFunction
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
	'@typescript-eslint/require-array-sort-compare': OFF,

	// when adding two variables, operands must both be of type number or of type string
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
	'@typescript-eslint/restrict-plus-operands': [
		WARN,
		{ checkCompoundAssignments: true }
	],

	// enforce template literal expressions to be of string type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
	'@typescript-eslint/restrict-template-expressions': OFF,

	// restricts the types allowed in boolean expressions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
	'@typescript-eslint/strict-boolean-expressions': OFF,

	// exhaustiveness checking in switch with union type
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
	'@typescript-eslint/switch-exhaustiveness-check': OFF,

	// sets preference level for triple slash directives versus ES6-style import declarations
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
	'@typescript-eslint/triple-slash-reference': WARN,

	// require consistent spacing around type annotations
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
	'@typescript-eslint/type-annotation-spacing': [
		WARN,
		{
			before: false,
			after: true,
			overrides: {
				arrow: { before: true }
			}
		}
	],

	// requires type annotations to exist
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
	'@typescript-eslint/typedef': OFF,

	// enforces unbound methods are called with their expected scope
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
	'@typescript-eslint/unbound-method': [
		WARN,
		{ ignoreStatic: true }
	],

	// warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
	'@typescript-eslint/unified-signatures': WARN,

	// enforce consistent brace style for blocks
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
	'brace-style': OFF,
	'@typescript-eslint/brace-style': [
		WARN,
		'stroustrup',
		{ allowSingleLine: false }
	],

	// require or disallow trailing comma
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
	'comma-dangle': OFF,
	'@typescript-eslint/comma-dangle': [
		WARN,
		{
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never',
			enums: 'never',
			generics: 'never',
			tuples: 'never'
		}
	],

	// enforces consistent spacing before and after commas
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
	'comma-spacing': OFF,
	'@typescript-eslint/comma-spacing': [
		WARN,
		{
			before: false,
			after: true
		}
	],

	// enforce default parameters to be last
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
	'default-param-last': OFF,
	'@typescript-eslint/default-param-last': WARN,

	// enforce dot notation whenever possible
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
	'dot-notation': OFF,
	'@typescript-eslint/dot-notation': [
		WARN,
		{
			allowKeywords: true,
			allowPattern: '^[a-z]+(_[a-z]+)+$',
			allowPrivateClassPropertyAccess: false,
			allowProtectedClassPropertyAccess: false
		}
	],

	// require or disallow spacing between function identifiers and their invocations
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
	'func-call-spacing': OFF,
	'@typescript-eslint/func-call-spacing': [
		WARN,
		'never'
	],

	// enforce consistent indentation
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
	'indent': OFF,
	'@typescript-eslint/indent': [
		WARN,
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: {
				var: 1,
				let: 1,
				const: 1
			},
			outerIIFEBody: 1,
			MemberExpression: 1,
			FunctionDeclaration: {
				body: 1,
				parameters: 1
			},
			FunctionExpression: {
				body: 1,
				parameters: 1
			},
			CallExpression: {
				arguments: 1
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			offsetTernaryExpressions: false,
			ignoredNodes: [],
			ignoreComments: false
		}
	],

	// require or disallow initialization in variable declarations
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
	'init-declarations': OFF,
	'@typescript-eslint/init-declarations': OFF,

	// enforce consistent spacing before and after keywords
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
	'keyword-spacing': OFF,
	'@typescript-eslint/keyword-spacing': [
		WARN,
		{
			before: true,
			after: true,
			overrides: {}
		}
	],

	// require or disallow an empty line between class members
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
	'lines-between-class-members': OFF,
	'@typescript-eslint/lines-between-class-members': [
		WARN,
		'always',
		{
			exceptAfterSingleLine: true,
			exceptAfterOverload: true
		}
	],

	// disallow generic Array constructors
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
	'no-array-constructor': OFF,
	'@typescript-eslint/no-array-constructor': WARN,

	// disallow duplicate class members
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
	'no-dupe-class-members': OFF,
	'@typescript-eslint/no-dupe-class-members': ERROR,

	// disallow duplicate imports
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
	'no-duplicate-imports': OFF,
	'@typescript-eslint/no-duplicate-imports': WARN,

	// disallow empty functions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
	'no-empty-function': OFF,
	'@typescript-eslint/no-empty-function': [
		WARN,
		{
			allow: [
				'arrowFunctions',
				'private-constructors',
				'protected-constructors',
				'decoratedFunctions'
			]
		}
	],

	// disallow unnecessary parentheses
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
	'no-extra-parens': OFF,
	'@typescript-eslint/no-extra-parens': [
		WARN,
		'functions'
	],

	// disallow unnecessary semicolons
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
	'no-extra-semi': OFF,
	'@typescript-eslint/no-extra-semi': WARN,

	// disallow the use of eval()-like methods
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
	'no-implied-eval': OFF,
	'@typescript-eslint/no-implied-eval': ERROR,

	// disallow this keywords outside of classes or class-like objects
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
	'no-invalid-this': OFF,
	'@typescript-eslint/no-invalid-this': [
		WARN,
		{ capIsConstructor: true }
	],

	// disallow function declarations that contain unsafe references inside loop statements
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
	'no-loop-func': OFF,
	'@typescript-eslint/no-loop-func': WARN,

	// disallow literal numbers that lose precision
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
	'no-loss-of-precision': OFF,
	'@typescript-eslint/no-loss-of-precision': WARN,

	// disallow magic numbers
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
	'@typescript-eslint/no-magic-numbers': OFF,

	// disallow variable redeclaration
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
	'no-redeclare': OFF,
	'@typescript-eslint/no-redeclare': [
		ERROR,
		{ ignoreDeclarationMerge: true }
	],

	// disallow variable declarations from shadowing variables declared in the outer scope
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
	'no-shadow': OFF,
	'@typescript-eslint/no-shadow': [
		ERROR,
		{
			builtinGlobals: false,
			hoist: 'functions',
			allow: [],
			ignoreTypeValueShadow: false,
			ignoreFunctionTypeParameterNameValueShadow: false
		}
	],

	// disallow throwing literals as exceptions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
	'no-throw-literal': OFF,
	'@typescript-eslint/no-throw-literal': WARN,

	// disallow unused expressions
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
	'no-unused-expressions': OFF,
	'@typescript-eslint/no-unused-expressions': [
		WARN,
		{
			allowShortCircuit: true,
			allowTernary: false,
			allowTaggedTemplates: false
		}
	],

	// disallow unused variables
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
	'no-unused-vars': OFF,
	'@typescript-eslint/no-unused-vars': [
		WARN,
		{
			vars: 'all',
			varsIgnorePattern: '^_',
			args: 'all',
			ignoreRestSiblings: true,
			argsIgnorePattern: '^_',
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: '^_'
		}
	],

	// disallow the use of variables before they are defined
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
	'no-use-before-define': OFF,
	'@typescript-eslint/no-use-before-define': [
		ERROR,
		{
			functions: false,
			classes: true,
			variables: true,
			enums: true,
			typedefs: false,
			ignoreTypeReferences: true
		}
	],

	// disallow unnecessary constructors
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
	'no-useless-constructor': OFF,
	'@typescript-eslint/no-useless-constructor': WARN,

	// enforce the consistent use of either backticks, double, or single quotes
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
	'quotes': OFF,
	'@typescript-eslint/quotes': [
		WARN,
		'single',
		{
			avoidEscape: true,
			allowTemplateLiterals: false
		}
	],

	// disallow async functions which have no await expression
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
	'require-await': OFF,
	'@typescript-eslint/require-await': WARN,

	// enforces consistent returning of awaited values
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
	'no-return-await': OFF,
	'@typescript-eslint/return-await': [
		WARN,
		'in-try-catch'
	],

	// require or disallow semicolons instead of ASI
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
	'semi': OFF,
	'@typescript-eslint/semi': [
		WARN,
		'always',
		{ omitLastInOneLineBlock: false }
	],

	// enforces consistent spacing before function parenthesis
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
	'space-before-function-paren': OFF,
	'@typescript-eslint/space-before-function-paren': [
		WARN,
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}
	],

	// this rule is aimed at ensuring there are spaces around infix operators
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
	'space-infix-ops': OFF,
	'@typescript-eslint/space-infix-ops': WARN,

	// NOTE: there is currently no TS counterpart of this rule and it flags false
	// positives on interfaces, enums etc.
	'lines-around-comment': OFF
};

module.exports = {
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				// extending configs may need to reconfigure this path/glob
				// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
				project: './tsconfig.json'
			},
			plugins: [
				'@typescript-eslint'
			],
			rules,
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': [ '.ts', '.tsx' ]
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
