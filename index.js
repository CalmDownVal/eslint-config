module.exports = {
	plugins: [
		'eslint-plugin-import'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		// ███████╗███████╗██╗     ██╗███╗   ██╗████████╗     ██████╗ ██████╗ ██████╗ ███████╗
		// ██╔════╝██╔════╝██║     ██║████╗  ██║╚══██╔══╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
		// █████╗  ███████╗██║     ██║██╔██╗ ██║   ██║       ██║     ██║   ██║██████╔╝█████╗
		// ██╔══╝  ╚════██║██║     ██║██║╚██╗██║   ██║       ██║     ██║   ██║██╔══██╗██╔══╝
		// ███████╗███████║███████╗██║██║ ╚████║   ██║       ╚██████╗╚██████╔╝██║  ██║███████╗
		// ╚══════╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝   ╚═╝        ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

		// enforce 'for' loop update clause moving the counter in the right direction
		// https://eslint.org/docs/rules/for-direction
		'for-direction': 'warn',

		// enforce `return` statements in getters
		// https://eslint.org/docs/rules/getter-return
		'getter-return': [
			'warn',
			{ allowImplicit: false }
		],

		// disallow using an async function as a Promise executor
		// https://eslint.org/docs/rules/no-async-promise-executor
		'no-async-promise-executor': 'warn',

		// disallow `await` inside of loops
		// https://eslint.org/docs/rules/no-await-in-loop
		'no-await-in-loop': 'off',

		// disallow comparing against -0
		// https://eslint.org/docs/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'warn',

		// disallow assignment operators in conditional expressions
		// https://eslint.org/docs/rules/no-cond-assign
		'no-cond-assign': [
			'warn',
			'except-parens'
		],

		// disallow the use of `console`
		// https://eslint.org/docs/rules/no-console
		'no-console': 'warn',

		// disallow constant expressions in conditions
		// https://eslint.org/docs/rules/no-constant-condition
		'no-constant-condition': [
			'warn',
			{ checkLoops: false }
		],

		// disallow control characters in regular expressions
		// https://eslint.org/docs/rules/no-control-regex
		'no-control-regex': 'warn',

		// disallow the use of `debugger`
		// https://eslint.org/docs/rules/no-debugger
		'no-debugger': 'warn',

		// disallow duplicate arguments in `function` definitions
		// https://eslint.org/docs/rules/no-dupe-args
		'no-dupe-args': 'error',

		// disallow duplicate conditions in if-else-if chains
		// https://eslint.org/docs/rules/no-dupe-else-if
		'no-dupe-else-if': 'warn',

		// disallow duplicate keys in object literals
		// https://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 'error',

		// disallow duplicate case labels
		// https://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 'warn',

		// disallow empty block statements
		// https://eslint.org/docs/rules/no-empty
		'no-empty': [
			'warn',
			{ allowEmptyCatch: true }
		],

		// disallow empty character classes in regular expressions
		// https://eslint.org/docs/rules/no-empty-character-class
		'no-empty-character-class': 'warn',

		// disallow reassigning exceptions in `catch` clauses
		// https://eslint.org/docs/rules/no-ex-assign
		'no-ex-assign': 'error',

		// disallow unnecessary boolean casts
		// https://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': [
			'warn',
			{ enforceForLogicalOperands: true }
		],

		// disallow unnecessary parentheses
		// https://eslint.org/docs/rules/no-extra-parens
		'no-extra-parens': [
			'warn',
			'all',
			{
				conditionalAssign: true,
				returnAssign: true,
				nestedBinaryExpressions: true,
				ignoreJSX: 'multi-line',
				enforceForArrowConditionals: true,
				enforceForSequenceExpressions: true,
				enforceForNewInMemberExpressions: true,
				enforceForFunctionPrototypeMethods: false
			}
		],

		// disallow unnecessary semicolons
		// https://eslint.org/docs/rules/no-extra-semi
		'no-extra-semi': 'warn',

		// disallow reassigning `function` declarations
		// https://eslint.org/docs/rules/no-func-assign
		'no-func-assign': 'error',

		// disallow assigning to imported bindings
		// https://eslint.org/docs/rules/no-import-assign
		'no-import-assign': 'error',

		// disallow variable or `function` declarations in nested blocks
		// https://eslint.org/docs/rules/no-inner-declarations
		'no-inner-declarations': [
			'warn',
			'both'
		],

		// disallow invalid regular expression strings in `RegExp` constructors
		// https://eslint.org/docs/rules/no-invalid-regexp
		'no-invalid-regexp': [
			'warn',
			{ allowConstructorFlags: [] }
		],

		// disallow irregular whitespace
		// https://eslint.org/docs/rules/no-irregular-whitespace
		'no-irregular-whitespace': [
			'warn',
			{
				skipStrings: false,
				skipComments: false,
				skipRegExps: false,
				skipTemplates: false
			}
		],

		// disallow literal numbers that lose precision
		// https://eslint.org/docs/rules/no-loss-of-precision
		'no-loss-of-precision': 'warn',

		// disallow characters which are made with multiple code points in character class syntax
		// https://eslint.org/docs/rules/no-misleading-character-class
		'no-misleading-character-class': 'warn',

		// disallow calling global object properties as functions
		// https://eslint.org/docs/rules/no-obj-calls
		'no-obj-calls': 'warn',

		// disallow returning values from Promise executor functions
		// https://eslint.org/docs/rules/no-promise-executor-return
		'no-promise-executor-return': 'warn',

		// disallow calling some `Object.prototype` methods directly on objects
		// https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'warn',

		// disallow multiple spaces in regular expressions
		// https://eslint.org/docs/rules/no-regex-spaces
		'no-regex-spaces': 'warn',

		// disallow returning values from setters
		// https://eslint.org/docs/rules/no-setter-return
		'no-setter-return': 'warn',

		// disallow sparse arrays
		// https://eslint.org/docs/rules/no-sparse-arrays
		'no-sparse-arrays': 'warn',

		// disallow template literal placeholder syntax in regular strings
		// https://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'warn',

		// disallow confusing multiline expressions
		// https://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'warn',

		// disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
		// https://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 'warn',

		// disallow loops with a body that allows only one iteration
		// https://eslint.org/docs/rules/no-unreachable-loop
		'no-unreachable-loop': [
			'warn',
			[
				'ForInStatement',
				'ForOfStatement'
			]
		],

		// disallow control flow statements in `finally` blocks
		// https://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// disallow negating the left operand of relational operators
		// https://eslint.org/docs/rules/no-unsafe-negation
		'no-unsafe-negation': [
			'warn',
			{ enforceForOrderingRelations: true }
		],

		// disallow use of optional chaining in contexts where the `undefined` value is not allowed
		// https://eslint.org/docs/rules/no-unsafe-optional-chaining
		'no-unsafe-optional-chaining': 'warn',

		// disallow useless backreferences in regular expressions
		// https://eslint.org/docs/rules/no-useless-backreference
		'no-useless-backreference': 'warn',

		// disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		// https://eslint.org/docs/rules/require-atomic-updates
		'require-atomic-updates': 'warn',

		// require calls to `isNaN()` when checking for `NaN`
		// https://eslint.org/docs/rules/use-isnan
		'use-isnan': [
			'warn',
			{
				enforceForSwitchCase: true,
				enforceForIndexOf: true
			}
		],

		// enforce comparing `typeof` expressions against valid strings
		// https://eslint.org/docs/rules/valid-typeof
		'valid-typeof': [
			'warn',
			{ requireStringLiterals: true }
		],

		// enforce getter and setter pairs in objects and classes
		// https://eslint.org/docs/rules/accessor-pairs
		'accessor-pairs': [
			'warn',
			{
				setWithoutGet: true,
				getWithoutSet: false,
				enforceForClassMembers: true
			}
		],

		// enforce `return` statements in callbacks of array methods
		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': [
			'warn',
			{
				allowImplicit: false,
				checkForEach: true
			}
		],

		// enforce the use of variables within the scope they are defined
		// https://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 'error',

		// enforce that class methods utilize `this`
		// https://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 'warn',

		// enforce a maximum cyclomatic complexity allowed in a program
		// https://eslint.org/docs/rules/complexity
		'complexity': 'off',

		// require `return` statements to either always or never specify values
		// https://eslint.org/docs/rules/consistent-return
		'consistent-return': 'warn',

		// enforce consistent brace style for all control statements
		// https://eslint.org/docs/rules/curly
		'curly': [
			'warn',
			'all'
		],

		// require `default` cases in `switch` statements
		// https://eslint.org/docs/rules/default-case
		'default-case': 'off',

		// enforce default clauses in switch statements to be last
		// https://eslint.org/docs/rules/default-case-last
		'default-case-last': 'off',

		// enforce default parameters to be last
		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'warn',

		// enforce consistent newlines before and after dots
		// https://eslint.org/docs/rules/dot-location
		'dot-location': [
			'warn',
			'property'
		],

		// enforce dot notation whenever possible
		// https://eslint.org/docs/rules/dot-notation
		'dot-notation': [
			'warn',
			{
				allowKeywords: true,
				allowPattern: '^[a-z]+(_[a-z]+)+$'
			}
		],

		// require the use of `===` and `!==`
		// https://eslint.org/docs/rules/eqeqeq
		'eqeqeq': [
			'warn',
			'always'
		],

		// require grouped accessor pairs in object literals and classes
		// https://eslint.org/docs/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': [
			'warn',
			'getBeforeSet'
		],

		// require `for-in` loops to include an `if` statement
		// https://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'off',

		// enforce a maximum number of classes per file
		// https://eslint.org/docs/rules/max-classes-per-file
		'max-classes-per-file': [
			'warn',
			1
		],

		// disallow the use of `alert`, `confirm`, and `prompt`
		// https://eslint.org/docs/rules/no-alert
		'no-alert': 'warn',

		// disallow the use of `arguments.caller` or `arguments.callee`
		// https://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// disallow lexical declarations in case clauses
		// https://eslint.org/docs/rules/no-case-declarations
		'no-case-declarations': 'warn',

		// disallow returning value from constructor
		// https://eslint.org/docs/rules/no-constructor-return
		'no-constructor-return': 'warn',

		// disallow division operators explicitly at the beginning of regular expressions
		// https://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// disallow `else` blocks after `return` statements in `if` statements
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': [
			'warn',
			{ allowElseIf: false }
		],

		// disallow empty functions
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': [
			'warn',
			[ 'arrowFunctions' ]
		],

		// disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'warn',

		// disallow `null` comparisons without type-checking operators
		// https://eslint.org/docs/rules/no-eq-null
		// NOTE: might be redundant since 'eqeqeq' is enabled
		'no-eq-null': 'warn',

		// disallow the use of `eval()`
		// https://eslint.org/docs/rules/no-eval
		'no-eval': 'error',

		// disallow extending native types
		// https://eslint.org/docs/rules/no-extend-native
		'no-extend-native': [
			'error',
			{ exceptions: [] }
		],

		// disallow unnecessary calls to `.bind()`
		// https://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 'warn',

		// disallow unnecessary labels
		// https://eslint.org/docs/rules/no-extra-label
		// NOTE: might be redundant since 'no-labels' is enabled
		'no-extra-label': 'warn',

		// disallow fallthrough of `case` statements
		// https://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': [
			'warn',
			{ commentPattern: 'falls?\\s+through' }
		],

		// disallow leading or trailing decimal points in numeric literals
		// https://eslint.org/docs/rules/no-floating-decimal
		'no-floating-decimal': 'warn',

		// disallow assignments to native objects or read-only global variables
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// disallow shorthand type conversions
		// https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': [
			'warn',
			{
				boolean: true,
				number: true,
				string: true,
				allow: []
			}
		],

		// disallow declarations in the global scope
		// https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': [
			'error',
			{
				lexicalBindings: false
			}
		],

		// disallow the use of `eval()`-like methods
		// https://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'error',

		// disallow `this` keywords outside of classes or class-like objects
		// https://eslint.org/docs/rules/no-invalid-this
		'no-invalid-this': [
			'warn',
			{ capIsConstructor: true }
		],

		// disallow the use of the `__iterator__` property
		// https://eslint.org/docs/rules/no-iterator
		'no-iterator': 'warn',

		// disallow labeled statements
		// https://eslint.org/docs/rules/no-labels
		'no-labels': [
			'warn',
			{
				allowLoop: false,
				allowSwitch: false
			}
		],

		// disallow unnecessary nested blocks
		// https://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 'warn',

		// disallow function declarations that contain unsafe references inside loop statements
		// https://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'warn',

		// disallow magic numbers
		// https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': [
			'warn',
			{ ignore: [ 0, 1, 2 ] }
		],

		// disallow multiple spaces
		// https://eslint.org/docs/rules/no-multi-spaces
		// NOTE: we undo the exception set by default to Property since the `key-spacing` rule is set up accordingly
		'no-multi-spaces': [
			'warn',
			{
				ignoreEOLComments: true,
				exceptions: {
					Property: false
				}
			}
		],

		// disallow multiline strings
		// https://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 'off',

		// disallow `new` operators outside of assignments or comparisons
		// https://eslint.org/docs/rules/no-new
		'no-new': 'error',

		// disallow `new` operators with the `Function` object
		// https://eslint.org/docs/rules/no-new-func
		'no-new-func': 'error',

		// disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		// https://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'warn',

		// disallow `\8` and `\9` escape sequences in string literals
		// https://eslint.org/docs/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'warn',

		// disallow octal literals
		// https://eslint.org/docs/rules/no-octal
		'no-octal': 'warn',

		// disallow octal escape sequences in string literals
		// https://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 'warn',

		// disallow reassigning `function` parameters
		// https://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 'error',

		// disallow the use of the `__proto__` property
		// https://eslint.org/docs/rules/no-proto
		'no-proto': 'warn',

		// disallow variable redeclaration
		// https://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// disallow certain properties on certain objects
		// https://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': 'off',

		// disallow assignment operators in `return` statements
		// https://eslint.org/docs/rules/no-return-assign
		'no-return-assign': [
			'warn',
			'except-parens'
		],

		// disallow unnecessary `return await`
		// https://eslint.org/docs/rules/no-return-await
		// NOTE: `return await ...` makes perfect sense in try-catch blocks
		'no-return-await': 'off',

		// disallow `javascript:` urls
		// https://eslint.org/docs/rules/no-script-url
		'no-script-url': 'error',

		// disallow assignments where both sides are exactly the same
		// https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': [
			'warn',
			{ props: true }
		],

		// disallow comparisons where both sides are exactly the same
		// https://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 'warn',

		// disallow comma operators
		// https://eslint.org/docs/rules/no-sequences
		'no-sequences': 'warn',

		// disallow throwing literals as exceptions
		// https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'warn',

		// disallow unmodified loop conditions
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'warn',

		// disallow unused expressions
		// https://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': [
			'warn',
			{
				allowShortCircuit: true,
				allowTernary: false,
				allowTaggedTemplates: false
			}
		],

		// disallow unused labels
		// https://eslint.org/docs/rules/no-unused-labels
		// NOTE: might be redundant since 'no-labels' is enabled
		'no-unused-labels': 'warn',

		// disallow unnecessary calls to `.call()` and `.apply()`
		// https://eslint.org/docs/rules/no-useless-call
		'no-useless-call': 'warn',

		// disallow unnecessary `catch` clauses
		// https://eslint.org/docs/rules/no-useless-catch
		'no-useless-catch': 'warn',

		// disallow unnecessary concatenation of literals or template literals
		// https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'warn',

		// disallow unnecessary escape characters
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'warn',

		// disallow redundant return statements
		// https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'warn',

		// disallow `void` operators
		// https://eslint.org/docs/rules/no-void
		'no-void': [
			'warn',
			{ allowAsStatement: false }
		],

		// disallow specified warning terms in comments
		// https://eslint.org/docs/rules/no-warning-comments
		'no-warning-comments': [
			'warn',
			{
				terms: [ 'todo', 'fixme' ],
				location: 'start'
			}
		],

		// disallow `with` statements
		// https://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// enforce using named capture group in regular expression
		// https://eslint.org/docs/rules/prefer-named-capture-group
		'prefer-named-capture-group': 'off',

		// require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': [
			'warn',
			{ allowEmptyReject: false }
		],

		// disallow use of the `RegExp` constructor in favor of regular expression literals
		// https://eslint.org/docs/rules/prefer-regex-literals
		'prefer-regex-literals': [
			'warn',
			{ disallowRedundantWrapping: true }
		],

		// enforce the consistent use of the radix argument when using `parseInt()`
		// https://eslint.org/docs/rules/radix
		'radix': 'off',

		// disallow async functions which have no `await` expression
		// https://eslint.org/docs/rules/require-await
		'require-await': 'warn',

		// enforce the use of `u` flag on RegExp
		// https://eslint.org/docs/rules/require-unicode-regexp
		'require-unicode-regexp': 'off',

		// require `var` declarations be placed at the top of their containing scope
		// https://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'warn',

		// require parentheses around immediate `function` invocations
		// https://eslint.org/docs/rules/wrap-iife
		'wrap-iife': [
			'warn',
			'inside',
			{ functionPrototypeMethods: true }
		],

		// require or disallow 'Yoda' conditions
		// https://eslint.org/docs/rules/yoda
		'yoda': [
			'warn',
			'never',
			{
				exceptRange: false,
				onlyEquality: false
			}
		],

		// require or disallow strict mode directives
		// https://eslint.org/docs/rules/strict
		'strict': [
			'warn',
			'safe'
		],

		// require or disallow initialization in variable declarations
		// https://eslint.org/docs/rules/init-declarations
		'init-declarations': 'off',

		// disallow deleting variables
		// https://eslint.org/docs/rules/no-delete-var
		'no-delete-var': 'error',

		// disallow labels that share a name with a variable
		// https://eslint.org/docs/rules/no-label-var
		// NOTE: might be redundant since 'no-labels' is enabled
		'no-label-var': 'error',

		// disallow specified global variables
		// https://eslint.org/docs/rules/no-restricted-globals
		'no-restricted-globals': 'off',

		// disallow variable declarations from shadowing variables declared in the outer scope
		// https://eslint.org/docs/rules/no-shadow
		'no-shadow': [
			'error',
			{
				builtinGlobals: true,
				hoist: 'functions',
				allow: []
			}
		],

		// disallow identifiers from shadowing restricted names
		// https://eslint.org/docs/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': 'error',

		// disallow the use of undeclared variables unless mentioned in `/*global */` comments
		// https://eslint.org/docs/rules/no-undef
		'no-undef': [
			'error',
			{ 'typeof': false }
		],

		// disallow initializing variables to `undefined`
		// https://eslint.org/docs/rules/no-undef-init
		'no-undef-init': 'warn',

		// disallow the use of `undefined` as an identifier
		// https://eslint.org/docs/rules/no-undefined
		'no-undefined': 'off',

		// disallow unused variables
		// https://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': 'warn',

		// disallow the use of variables before they are defined
		// https://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true
			}
		],

		// enforce linebreaks after opening and before closing array brackets
		// https://eslint.org/docs/rules/array-bracket-newline
		'array-bracket-newline': [
			'warn',
			{
				multiline: true,
				minItems: null
			}
		],

		// enforce consistent spacing inside array brackets
		// https://eslint.org/docs/rules/array-bracket-spacing
		'array-bracket-spacing': [
			'warn',
			'always',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],

		// enforce line breaks after each array element
		// https://eslint.org/docs/rules/array-element-newline
		'array-element-newline': [
			'warn',
			'consistent'
		],

		// disallow or enforce spaces inside of blocks after opening block and before closing block
		// https://eslint.org/docs/rules/block-spacing
		// NOTE: might be redundant since 'brace-style' is enabled
		'block-spacing': [
			'off',
			'always'
		],

		// enforce consistent brace style for blocks
		// https://eslint.org/docs/rules/brace-style
		'brace-style': [
			'warn',
			'stroustrup',
			{ allowSingleLine: false }
		],

		// enforce camelcase naming convention
		// https://eslint.org/docs/rules/camelcase
		'camelcase': [
			'warn',
			{
				properties: 'always',
				ignoreDestructuring: false,
				ignoreImports: false,
				ignoreGlobals: false,
				allow: []
			}
		],

		// enforce or disallow capitalization of the first letter of a comment
		// https://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': [
			'warn',
			'never',
			{
				ignorePattern: '',
				ignoreInlineComments: false,
				ignoreConsecutiveComments: false
			}
		],

		// require or disallow trailing commas
		// https://eslint.org/docs/rules/comma-dangle
		'comma-dangle': [
			'warn',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],

		// enforce consistent spacing before and after commas
		// https://eslint.org/docs/rules/comma-spacing
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true
			}
		],

		// enforce consistent comma style
		// https://eslint.org/docs/rules/comma-style
		'comma-style': [
			'warn',
			'last',
			{ exceptions: {} }
		],

		// enforce consistent spacing inside computed property brackets
		// https://eslint.org/docs/rules/computed-property-spacing
		'computed-property-spacing': [
			'warn',
			'never',
			{ enforceForClassMembers: true }
		],

		// enforce consistent naming when capturing the current execution context
		// https://eslint.org/docs/rules/consistent-this
		// NOTE: nowadays arrow functions are preferable, might get used for legacy codebases though
		'consistent-this': [
			'warn',
			'that'
		],

		// require or disallow newline at the end of files
		// https://eslint.org/docs/rules/eol-last
		'eol-last': [
			'warn',
			'always'
		],

		// require or disallow spacing between function identifiers and their invocations
		// https://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': [
			'warn',
			'never'
		],

		// require function names to match the name of the variable or property to which they are assigned
		// https://eslint.org/docs/rules/func-name-matching
		'func-name-matching': [
			'warn',
			'always',
			{
				considerPropertyDescriptor: false,
				includeCommonJSModuleExports: false
			}
		],

		// require or disallow named `function` expressions
		// https://eslint.org/docs/rules/func-names
		'func-names': [
			'warn',
			'as-needed',
			{ generators: 'as-needed' }
		],

		// enforce the consistent use of either `function` declarations or expressions
		// https://eslint.org/docs/rules/func-style
		'func-style': [
			'warn',
			'declaration',
			{ allowArrowFunctions: true }
		],

		// enforce line breaks between arguments of a function call
		// https://eslint.org/docs/rules/function-call-argument-newline
		'function-call-argument-newline': [
			'warn',
			'consistent'
		],

		// enforce consistent line breaks inside function parentheses
		// https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': [
			'warn',
			'multiline'
		],

		// disallow specified identifiers
		// https://eslint.org/docs/rules/id-denylist
		'id-denylist': 'off',

		// enforce minimum and maximum identifier lengths
		// https://eslint.org/docs/rules/id-length
		'id-length': [
			'warn',
			{
				min: 1,
				max: 32,
				properties: 'always',
				exceptions: [],
				exceptionPatterns: []
			}
		],

		// require identifiers to match a specified regular expression
		// https://eslint.org/docs/rules/id-match
		'id-match': 'off',

		// enforce the location of arrow function bodies
		// https://eslint.org/docs/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': [
			'warn',
			'beside'
		],

		// enforce consistent indentation
		// https://eslint.org/docs/rules/indent
		'indent': [
			'warn',
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

		// enforce the consistent use of either double or single quotes in JSX attributes
		// https://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': [
			'warn',
			'prefer-single'
		],

		// enforce consistent spacing between keys and values in object literal properties
		// https://eslint.org/docs/rules/key-spacing
		'key-spacing': [
			'warn',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],

		// enforce consistent spacing before and after keywords
		// https://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': [
			'warn',
			{
				before: true,
				after: true,
				overrides: {}
			}
		],

		// enforce position of line comments
		// https://eslint.org/docs/rules/line-comment-position
		'line-comment-position': [
			'warn',
			{
				position: 'above',
				applyDefaultIgnorePatterns: true
			}
		],

		// enforce consistent linebreak style
		// https://eslint.org/docs/rules/linebreak-style
		'linebreak-style': [
			'warn',
			'unix'
		],

		// require empty lines around comments
		// https://eslint.org/docs/rules/lines-around-comment
		'lines-around-comment': [
			'warn',
			{
				beforeBlockComment: true,
				afterBlockComment: false,
				beforeLineComment: true,
				afterLineComment: true,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowClassStart: true,
				allowClassEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				applyDefaultIgnorePatterns: true
			}
		],

		// require or disallow an empty line between class members
		// https://eslint.org/docs/rules/lines-between-class-members
		'lines-between-class-members': [
			'warn',
			'always',
			{ exceptAfterSingleLine: true }
		],

		// enforce a maximum depth that blocks can be nested
		// https://eslint.org/docs/rules/max-depth
		'max-depth': [
			'warn',
			{ max: 5 }
		],

		// enforce a maximum line length
		// https://eslint.org/docs/rules/max-len
		'max-len': [
			'warn',
			{
				tabWidth: 4,
				code: 80,
				comments: 80,
				ignoreComments: false,
				ignoreTrailingComments: false,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],

		// enforce a maximum number of lines per file
		// https://eslint.org/docs/rules/max-lines
		'max-lines': [
			'warn',
			{
				max: 500,
				skipBlankLines: true,
				skipComments: true
			}
		],

		// enforce a maximum number of line of code in a function
		// https://eslint.org/docs/rules/max-lines-per-function
		'max-lines-per-function': [
			'warn',
			{
				max: 100,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: false
			}
		],

		// enforce a maximum depth that callbacks can be nested
		// https://eslint.org/docs/rules/max-nested-callbacks
		'max-nested-callbacks': [
			'warn',
			{ max: 3 }
		],

		// enforce a maximum number of parameters in function definitions
		// https://eslint.org/docs/rules/max-params
		'max-params': [
			'warn',
			{ max: 3 }
		],

		// enforce a maximum number of statements allowed in function blocks
		// https://eslint.org/docs/rules/max-statements
		// NOTE: turned off as `max-lines-per-function` is in effect
		'max-statements': 'off',

		// enforce a maximum number of statements allowed per line
		// https://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': [
			'warn',
			{ max: 1 }
		],

		// enforce a particular style for multiline comments
		// https://eslint.org/docs/rules/multiline-comment-style
		'multiline-comment-style': [
			'warn',
			'starred-block'
		],

		// enforce newlines between operands of ternary expressions
		// https://eslint.org/docs/rules/multiline-ternary
		'multiline-ternary': [
			'warn',
			'always-multiline'
		],

		// require constructor names to begin with a capital letter
		// https://eslint.org/docs/rules/new-cap
		'new-cap': [
			'warn',
			{
				newIsCap: true,
				capIsNew: true,
				properties: true
			}
		],

		// enforce or disallow parentheses when invoking a constructor with no arguments
		// https://eslint.org/docs/rules/new-parens
		'new-parens': [
			'warn',
			'always'
		],

		// require a newline after each call in a method chain
		// https://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': [
			'warn',
			{ ignoreChainWithDepth: 2 }
		],

		// disallow `Array` constructors
		// https://eslint.org/docs/rules/no-array-constructor
		'no-array-constructor': 'warn',

		// disallow bitwise operators
		// https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'off',

		// disallow `continue` statements
		// https://eslint.org/docs/rules/no-continue
		'no-continue': 'off',

		// disallow inline comments after code
		// https://eslint.org/docs/rules/no-inline-comments
		'no-inline-comments': [
			'warn',
			{ ignorePattern: 'webpackChunkName:.+' }
		],

		// disallow `if` statements as the only statement in `else` blocks
		// https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'warn',

		// disallow mixed binary operators
		// https://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': [
			'warn',
			{
				groups: [
					[ '+', '-', '*', '/', '%', '**' ],
					[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
					[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
					[ '&&', '||' ],
					[ 'in', 'instanceof' ]
				],
				allowSamePrecedence: true
			}
		],

		// disallow mixed spaces and tabs for indentation
		// https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
		'no-mixed-spaces-and-tabs': [
			'warn',
			'smart-tabs'
		],

		// disallow use of chained assignment expressions
		// https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': 'warn',

		// disallow multiple empty lines
		// https://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 3,
				maxEOF: 0,
				maxBOF: 0
			}
		],

		// disallow negated conditions
		// https://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'warn',

		// disallow nested ternary expressions
		// https://eslint.org/docs/rules/no-nested-ternary
		'no-nested-ternary': 'off',

		// disallow `Object` constructors
		// https://eslint.org/docs/rules/no-new-object
		'no-new-object': 'warn',

		// disallow the unary operators `++` and `--`
		// https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'off',

		// disallow specified syntax
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error',
			'WithStatement',
			'BinaryExpression[operator="in"]'
		],

		// disallow all tabs
		// https://eslint.org/docs/rules/no-tabs
		'no-tabs': 'off',

		// disallow ternary operators
		// https://eslint.org/docs/rules/no-ternary
		'no-ternary': 'off',

		// disallow trailing whitespace at the end of lines
		// https://eslint.org/docs/rules/no-trailing-spaces
		'no-trailing-spaces': [
			'warn',
			{
				skipBlankLines: false,
				ignoreComments: false
			}
		],

		// disallow dangling underscores in identifiers
		// https://eslint.org/docs/rules/no-underscore-dangle
		// NOTE: codebases that need to control member visibility should migrate to TypeScript
		'no-underscore-dangle': [
			'warn',
			{
				allow: [],
				allowAfterThis: true,
				allowAfterSuper: false,
				allowAfterThisConstructor: false,
				enforceInMethodNames: false,
				allowFunctionParams: true
			}
		],

		// disallow ternary operators when simpler alternatives exist
		// https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': 'warn',

		// disallow whitespace before properties
		// https://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'warn',

		// enforce the location of single-line statements
		// https://eslint.org/docs/rules/nonblock-statement-body-position
		// NOTE: `curly` is set to enforce blocks even around single statements
		'nonblock-statement-body-position': 'off',

		// enforce consistent line breaks inside braces
		// https://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': [
			'warn',
			{
				ObjectExpression: { multiline: true },
				ObjectPattern: { multiline: true },
				ImportDeclaration: { multiline: true },
				ExportDeclaration: { multiline: true }
			}
		],

		// enforce consistent spacing inside braces
		// https://eslint.org/docs/rules/object-curly-spacing
		'object-curly-spacing': [
			'warn',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true
			}
		],

		// enforce placing object properties on separate lines
		// https://eslint.org/docs/rules/object-property-newline
		'object-property-newline': [
			'warn',
			{ allowAllPropertiesOnSameLine: false }
		],

		// enforce variables to be declared either together or separately in functions
		// https://eslint.org/docs/rules/one-var
		'one-var': [
			'warn',
			{
				var: 'never',
				let: 'never',
				const: 'never'
			}
		],

		// require or disallow newlines around variable declarations
		// https://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': [
			'warn',
			'always'
		],

		// require or disallow assignment operator shorthand where possible
		// https://eslint.org/docs/rules/operator-assignment
		'operator-assignment': [
			'warn',
			'always'
		],

		// enforce consistent linebreak style for operators
		// https://eslint.org/docs/rules/operator-linebreak
		'operator-linebreak': [
			'warn',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		],

		// require or disallow padding within blocks
		// https://eslint.org/docs/rules/padded-blocks
		'padded-blocks': [
			'warn',
			{
				blocks: 'never',
				classes: 'never',
				switches: 'never'
			},
			{ allowSingleLineBlocks: false }
		],

		// require or disallow padding lines between statements
		// https://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': [
			'warn',
			{
				blankLine: 'always',
				prev: 'block-like',
				next: [ 'break', 'continue', 'return', 'throw']
			},
			{
				blankLine: 'always',
				prev: [ 'const', 'let', 'var' ],
				next: 'block-like'
			}
		],

		// disallow the use of `Math.pow` in favor of the `**` operator
		// https://eslint.org/docs/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': 'warn',

		// disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
		// https://eslint.org/docs/rules/prefer-object-spread
		'prefer-object-spread': 'warn',

		// require quotes around object literal property names
		// https://eslint.org/docs/rules/quote-props
		'quote-props': [
			'warn',
			'consistent-as-needed',
			{
				keywords: true,
				numbers: true
			}
		],

		// enforce the consistent use of either backticks, double, or single quotes
		// https://eslint.org/docs/rules/quotes
		'quotes': [
			'warn',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],

		// require or disallow semicolons instead of ASI
		// https://eslint.org/docs/rules/semi
		'semi': [
			'warn',
			'always',
			{ omitLastInOneLineBlock: false }
		],

		// enforce consistent spacing before and after semicolons
		// https://eslint.org/docs/rules/semi-spacing
		'semi-spacing': [
			'warn',
			{
				before: false,
				after: false
			}
		],

		// enforce location of semicolons
		// https://eslint.org/docs/rules/semi-style
		'semi-style': [
			'warn',
			'last'
		],

		// require object keys to be sorted
		// https://eslint.org/docs/rules/sort-keys
		'sort-keys': 'off',

		// require variables within the same declaration block to be sorted
		// https://eslint.org/docs/rules/sort-vars
		'sort-vars': 'off',

		// enforce consistent spacing before blocks
		// https://eslint.org/docs/rules/space-before-blocks
		'space-before-blocks': [
			'warn',
			{
				functions: 'never',
				keywords: 'always',
				classes: 'always'
			}
		],

		// enforce consistent spacing before `function` definition opening parenthesis
		// https://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],

		// enforce consistent spacing inside parentheses
		// https://eslint.org/docs/rules/space-in-parens
		'space-in-parens': [
			'warn',
			'never',
			{ exceptions: [] }
		],

		// require spacing around infix operators
		// https://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': 'warn',

		// enforce consistent spacing before or after unary operators
		// https://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': [
			'warn',
			{
				words: true,
				nonwords: false,
				overrides: {}
			}
		],

		// enforce consistent spacing after the `//` or `/*` in a comment
		// https://eslint.org/docs/rules/spaced-comment
		'spaced-comment': [
			'warn',
			'always',
			{
				line: {},
				block: {
					markers: [ '*' ],
					balanced: true
				}
			}
		],

		// enforce spacing around colons of switch statements
		// https://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': [
			'warn',
			{
				after: true,
				before: false
			}
		],

		// require or disallow spacing between template tags and their literals
		// https://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': [
			'warn',
			'never'
		],

		// require or disallow Unicode byte order mark (BOM)
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': [
			'off',
			'never'
		],

		// require parenthesis around regex literals
		// https://eslint.org/docs/rules/wrap-regex
		'wrap-regex': 'off',

		// require braces around arrow function bodies
		// https://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': [
			'warn',
			'as-needed'
		],

		// require parentheses around arrow function arguments
		// https://eslint.org/docs/rules/arrow-parens
		'arrow-parens': [
			'warn',
			'as-needed',
			{ requireForBlockBody: false }
		],

		// enforce consistent spacing before and after the arrow in arrow functions
		// https://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': [
			'warn',
			{
				before: true,
				after: true
			}
		],

		// require `super()` calls in constructors
		// https://eslint.org/docs/rules/constructor-super
		'constructor-super': 'error',

		// enforce consistent spacing around `*` operators in generator functions
		// https://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': [
			'warn',
			{
				before: false,
				after: true
			}
		],

		// disallow reassigning class members
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow arrow functions where they could be confused with comparisons
		// https://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': [
			'warn',
			{ allowParens: true }
		],

		// disallow reassigning `const` variables
		// https://eslint.org/docs/rules/no-const-assign
		'no-const-assign': 'error',

		// disallow duplicate class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// disallow duplicate module imports
		// https://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 'warn',

		// disallow `new` operators with the `Symbol` object
		// https://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// disallow specified names in exports
		// https://eslint.org/docs/rules/no-restricted-exports
		'no-restricted-exports': 'off',

		// disallow specified modules when loaded by `import`
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': 'off',

		// disallow `this`/`super` before calling `super()` in constructors
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow unnecessary computed property keys in objects and classes
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': [
			'warn',
			{ enforceForClassMembers: true }
		],

		// disallow unnecessary constructors
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'warn',

		// disallow renaming import, export, and destructured assignments to the same name
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': [
			'warn',
			{
				ignoreImport: false,
				ignoreExport: false,
				ignoreDestructuring: false
			}
		],

		// require `let` or `const` instead of `var`
		// https://eslint.org/docs/rules/no-var
		'no-var': 'error',

		// require or disallow method and property shorthand syntax for object literals
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [
			'warn',
			'always',
			{
				avoidQuotes: true,
				ignoreConstructors: true,
				avoidExplicitReturnArrows: true
			}
		],

		// require using arrow functions for callbacks
		// https://eslint.org/docs/rules/prefer-arrow-callback
		'prefer-arrow-callback': [
			'warn',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true
			}
		],

		// require `const` declarations for variables that are never reassigned after declared
		// https://eslint.org/docs/rules/prefer-const
		'prefer-const': [
			'warn',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false
			}
		],

		// require destructuring from arrays and/or objects
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': [
			'warn',
			{
				VariableDeclarator: {
					array: true,
					object: true
				},
				AssignmentExpression: {
					array: false,
					object: false
				}
			},
			{ enforceForRenamedProperties: false }
		],

		// disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'warn',

		// require rest parameters instead of `arguments`
		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'warn',

		// require spread operators instead of `.apply()`
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'warn',

		// require template literals instead of string concatenation
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'warn',

		// require generator functions to contain `yield`
		// https://eslint.org/docs/rules/require-yield
		'require-yield': 'warn',

		// enforce spacing between rest and spread operators and their expressions
		// https://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': [
			'warn',
			'never'
		],

		// enforce sorted import declarations within modules
		// https://eslint.org/docs/rules/sort-imports
		// NOTE: overridden by 'import/order'
		'sort-imports': 'off',

		// require symbol descriptions
		// https://eslint.org/docs/rules/symbol-description
		'symbol-description': 'warn',

		// require or disallow spacing around embedded expressions of template strings
		// https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': [
			'warn',
			'never'
		],

		// require or disallow spacing around the `*` in `yield*` expressions
		// https://eslint.org/docs/rules/yield-star-spacing
		'yield-star-spacing': [
			'warn',
			{
				before: false,
				after: true
			}
		],

		// ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
		// ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
		// ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
		// ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
		// ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
		// ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝

		// ensure imports point to a file/module that can be resolved
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		'import/no-unresolved': [
			'error',
			{
				commonjs: false,
				amd: false,
				ignore: [],
				caseSensitive: true
			}
		],

		// ensure named imports correspond to a named export in the remote file
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
		'import/named': 'error',

		// ensure a default export is present, given a default import
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
		'import/default': 'error',

		// ensure imported namespaces contain dereferenced properties as they are dereferenced
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': [
			'error',
			{ allowComputed: true }
		],

		// restrict which files can be imported in a given folder
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
		'import/no-restricted-paths': 'off',

		// forbid import of modules using absolute paths
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		'import/no-absolute-path': [
			'warn',
			{
				esmodule: true,
				commonjs: false,
				amd: false
			}
		],

		// forbid require() calls with expressions
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
		'import/no-dynamic-require': 'off',

		// prevent importing the submodules of other modules
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
		'import/no-internal-modules': 'off',

		// forbid webpack loader syntax in imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
		'import/no-webpack-loader-syntax': 'off',

		// forbid a module from importing itself
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
		'import/no-self-import': 'error',

		// forbid a module from importing a module with a dependency path back to itself
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
		'import/no-cycle': [
			'error',
			{
				maxDepth: 16,
				ignoreExternal: true
			}
		],

		// prevent unnecessary path segments in import and require statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
		'import/no-useless-path-segments': [
			'warn',
			{
				noUselessIndex: true,
				commonjs: false
			}
		],

		// forbid importing modules from parent directories
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
		'import/no-relative-parent-imports': 'warn',

		// report any invalid exports, i.e. re-export of the same name
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
		'import/export': 'error',

		// report use of exported name as identifier of default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
		'import/no-named-as-default': 'warn',

		// report use of exported name as property of default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
		'import/no-named-as-default-member': 'warn',

		// report imported names marked with @deprecated documentation tag
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
		'import/no-deprecated': 'warn',

		// forbid the use of extraneous packages
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': 'off',

		// forbid the use of mutable exports with var or let
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 'error',

		// report modules without exports, or exports without matching import in another module
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
		'import/no-unused-modules': 'off',

		// report potentially ambiguous parse goal (script vs. module)
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
		'import/unambiguous': 'warn',

		// report CommonJS require calls and `module.exports` or `exports.*`
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
		'import/no-commonjs': 'warn',

		// report AMD require and define calls
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
		'import/no-amd': 'warn',

		// no Node.js builtin modules
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
		'import/no-nodejs-modules': 'off',

		// ensure all imports appear before other statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
		// NOTE: overridden by 'import/order'
		'import/first': 'off',

		// ensure all exports appear after other statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
		'import/exports-last': 'off',

		// report repeated import of the same module in multiple places
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'import/no-duplicates': [
			'warn',
			{ considerQueryString: true }
		],

		// forbid namespace (a.k.a. "wildcard" *) imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
		'import/no-namespace': 'off',

		// ensure consistent use of file extension within the import path
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		'import/extensions': 'off',

		// enforce a convention in module import order
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
		'import/order': [
			'warn',
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
						group: 'internal'
					}
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],

		// enforce a newline after import statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': [
			'warn',
			{ count: 1 }
		],

		// prefer a default export if module exports a single name
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'off',

		// limit the maximum number of dependencies a module can have
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
		'import/max-dependencies': 'off',

		// forbid unassigned imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
		'import/no-unassigned-import': 'off',

		// forbid named default exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
		'import/no-named-default': 'warn',

		// forbid default exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
		'import/no-default-export': 'warn',

		// forbid named exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
		'import/no-named-export': 'off',

		// forbid anonymous values as default exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
		'import/no-anonymous-default-export': 'off',

		// prefer named exports to be grouped together in a single export declaration
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
		'import/group-exports': 'off',

		// enforce a leading comment with the webpackChunkName for dynamic imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
		'import/dynamic-import-chunkname': 'off'
	}
};
