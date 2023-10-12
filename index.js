// this set of rules configures all core (built-in) rules of ESLint
// ---

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const rules = {
	// enforce 'for' loop update clause moving the counter in the right direction
	// https://eslint.org/docs/latest/rules/for-direction
	'for-direction': WARN,

	// enforce `return` statements in getters
	// https://eslint.org/docs/latest/rules/getter-return
	'getter-return': [
		WARN,
		{
			allowImplicit: false
		}
	],

	// disallow using an async function as a Promise executor
	// https://eslint.org/docs/latest/rules/no-async-promise-executor
	'no-async-promise-executor': WARN,

	// disallow `await` inside of loops
	// https://eslint.org/docs/latest/rules/no-await-in-loop
	'no-await-in-loop': OFF,

	// disallow comparing against -0
	// https://eslint.org/docs/latest/rules/no-compare-neg-zero
	'no-compare-neg-zero': WARN,

	// disallow assignment operators in conditional expressions
	// https://eslint.org/docs/latest/rules/no-cond-assign
	'no-cond-assign': [
		WARN,
		'except-parens'
	],

	// disallow the use of `console`
	// https://eslint.org/docs/latest/rules/no-console
	'no-console': [
		WARN,
		{
			// Note: this option's schema is declared as array with minItems: 1
			allow: undefined
		}
	],

	// disallow constant expressions in conditions
	// https://eslint.org/docs/latest/rules/no-constant-condition
	'no-constant-condition': [
		WARN,
		{
			checkLoops: false
		}
	],

	// disallow control characters in regular expressions
	// https://eslint.org/docs/latest/rules/no-control-regex
	'no-control-regex': WARN,

	// disallow the use of `debugger`
	// https://eslint.org/docs/latest/rules/no-debugger
	'no-debugger': WARN,

	// disallow duplicate arguments in `function` definitions
	// https://eslint.org/docs/latest/rules/no-dupe-args
	'no-dupe-args': ERROR,

	// disallow duplicate conditions in if-else-if chains
	// https://eslint.org/docs/latest/rules/no-dupe-else-if
	'no-dupe-else-if': WARN,

	// disallow duplicate keys in object literals
	// https://eslint.org/docs/latest/rules/no-dupe-keys
	'no-dupe-keys': ERROR,

	// disallow duplicate case labels
	// https://eslint.org/docs/latest/rules/no-duplicate-case
	'no-duplicate-case': WARN,

	// disallow empty block statements
	// https://eslint.org/docs/latest/rules/no-empty
	'no-empty': [
		WARN,
		{
			allowEmptyCatch: true
		}
	],

	// disallow empty character classes in regular expressions
	// https://eslint.org/docs/latest/rules/no-empty-character-class
	'no-empty-character-class': WARN,

	// disallow reassigning exceptions in `catch` clauses
	// https://eslint.org/docs/latest/rules/no-ex-assign
	'no-ex-assign': ERROR,

	// disallow unnecessary boolean casts
	// https://eslint.org/docs/latest/rules/no-extra-boolean-cast
	'no-extra-boolean-cast': [
		WARN,
		{
			enforceForLogicalOperands: true
		}
	],

	// disallow unnecessary parentheses
	// https://eslint.org/docs/latest/rules/no-extra-parens
	'no-extra-parens': [
		WARN,
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
	// https://eslint.org/docs/latest/rules/no-extra-semi
	'no-extra-semi': WARN,

	// disallow reassigning `function` declarations
	// https://eslint.org/docs/latest/rules/no-func-assign
	'no-func-assign': ERROR,

	// disallow assigning to imported bindings
	// https://eslint.org/docs/latest/rules/no-import-assign
	'no-import-assign': ERROR,

	// disallow variable or `function` declarations in nested blocks
	// https://eslint.org/docs/latest/rules/no-inner-declarations
	'no-inner-declarations': [
		WARN,
		'both'
	],

	// disallow invalid regular expression strings in `RegExp` constructors
	// https://eslint.org/docs/latest/rules/no-invalid-regexp
	'no-invalid-regexp': [
		WARN,
		{
			allowConstructorFlags: []
		}
	],

	// disallow irregular whitespace
	// https://eslint.org/docs/latest/rules/no-irregular-whitespace
	'no-irregular-whitespace': [
		WARN,
		{
			skipStrings: false,
			skipComments: false,
			skipRegExps: false,
			skipTemplates: false
		}
	],

	// disallow literal numbers that lose precision
	// https://eslint.org/docs/latest/rules/no-loss-of-precision
	'no-loss-of-precision': WARN,

	// disallow characters which are made with multiple code points in character class syntax
	// https://eslint.org/docs/latest/rules/no-misleading-character-class
	'no-misleading-character-class': WARN,

	// Disallow `new` operators with global non-constructor functions
	// https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
	'no-new-native-nonconstructor': ERROR,

	// disallow calling global object properties as functions
	// https://eslint.org/docs/latest/rules/no-obj-calls
	'no-obj-calls': WARN,

	// disallow returning values from Promise executor functions
	// https://eslint.org/docs/latest/rules/no-promise-executor-return
	'no-promise-executor-return': [
		WARN,
		{
			allowVoid: false
		}
	],

	// disallow calling some `Object.prototype` methods directly on objects
	// https://eslint.org/docs/latest/rules/no-prototype-builtins
	'no-prototype-builtins': WARN,

	// disallow multiple spaces in regular expressions
	// https://eslint.org/docs/latest/rules/no-regex-spaces
	'no-regex-spaces': WARN,

	// disallow returning values from setters
	// https://eslint.org/docs/latest/rules/no-setter-return
	'no-setter-return': WARN,

	// disallow sparse arrays
	// https://eslint.org/docs/latest/rules/no-sparse-arrays
	'no-sparse-arrays': WARN,

	// disallow template literal placeholder syntax in regular strings
	// https://eslint.org/docs/latest/rules/no-template-curly-in-string
	'no-template-curly-in-string': WARN,

	// disallow confusing multiline expressions
	// https://eslint.org/docs/latest/rules/no-unexpected-multiline
	'no-unexpected-multiline': WARN,

	// disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
	// https://eslint.org/docs/latest/rules/no-unreachable
	'no-unreachable': WARN,

	// disallow loops with a body that allows only one iteration
	// https://eslint.org/docs/latest/rules/no-unreachable-loop
	'no-unreachable-loop': [
		WARN,
		{
			ignore: [
				'ForInStatement',
				'ForOfStatement'
			]
		}
	],

	// disallow control flow statements in `finally` blocks
	// https://eslint.org/docs/latest/rules/no-unsafe-finally
	'no-unsafe-finally': ERROR,

	// disallow negating the left operand of relational operators
	// https://eslint.org/docs/latest/rules/no-unsafe-negation
	'no-unsafe-negation': [
		WARN,
		{
			enforceForOrderingRelations: true
		}
	],

	// disallow use of optional chaining in contexts where the `undefined` value is not allowed
	// https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
	'no-unsafe-optional-chaining': [
		WARN,
		{
			disallowArithmeticOperators: true
		}
	],

	// Disallow unused private class members
	// https://eslint.org/docs/latest/rules/no-unused-private-class-members
	'no-unused-private-class-members': WARN,

	// disallow useless backreferences in regular expressions
	// https://eslint.org/docs/latest/rules/no-useless-backreference
	'no-useless-backreference': WARN,

	// disallow assignments that can lead to race conditions due to usage of `await` or `yield`
	// https://eslint.org/docs/latest/rules/require-atomic-updates
	// Note: while this rule promises to flag potentially quite nasty bugs, more often than not it flags false positives
	'require-atomic-updates': OFF,

	// require calls to `isNaN()` when checking for `NaN`
	// https://eslint.org/docs/latest/rules/use-isnan
	'use-isnan': [
		WARN,
		{
			enforceForSwitchCase: true,
			enforceForIndexOf: true
		}
	],

	// enforce comparing `typeof` expressions against valid strings
	// https://eslint.org/docs/latest/rules/valid-typeof
	'valid-typeof': [
		WARN,
		{
			requireStringLiterals: true
		}
	],

	// enforce getter and setter pairs in objects and classes
	// https://eslint.org/docs/latest/rules/accessor-pairs
	'accessor-pairs': [
		WARN,
		{
			setWithoutGet: true,
			getWithoutSet: false,
			enforceForClassMembers: true
		}
	],

	// enforce `return` statements in callbacks of array methods
	// https://eslint.org/docs/latest/rules/array-callback-return
	'array-callback-return': [
		WARN,
		{
			allowImplicit: false,
			checkForEach: true
		}
	],

	// enforce the use of variables within the scope they are defined
	// https://eslint.org/docs/latest/rules/block-scoped-var
	'block-scoped-var': ERROR,

	// enforce that class methods utilize `this`
	// https://eslint.org/docs/latest/rules/class-methods-use-this
	// NOTE: flags method overrides and is overall quite annoying
	'class-methods-use-this': OFF,

	// enforce a maximum cyclomatic complexity allowed in a program
	// https://eslint.org/docs/latest/rules/complexity
	'complexity': OFF,

	// require `return` statements to either always or never specify values
	// https://eslint.org/docs/latest/rules/consistent-return
	'consistent-return': [
		WARN,
		{
			treatUndefinedAsUnspecified: true
		}
	],

	// enforce consistent brace style for all control statements
	// https://eslint.org/docs/latest/rules/curly
	'curly': [
		WARN,
		'all'
	],

	// require `default` cases in `switch` statements
	// https://eslint.org/docs/latest/rules/default-case
	'default-case': OFF,

	// enforce default clauses in switch statements to be last
	// https://eslint.org/docs/latest/rules/default-case-last
	'default-case-last': OFF,

	// enforce default parameters to be last
	// https://eslint.org/docs/latest/rules/default-param-last
	'default-param-last': WARN,

	// enforce consistent newlines before and after dots
	// https://eslint.org/docs/latest/rules/dot-location
	'dot-location': [
		WARN,
		'property'
	],

	// enforce dot notation whenever possible
	// https://eslint.org/docs/latest/rules/dot-notation
	'dot-notation': [
		WARN,
		{
			allowKeywords: true,
			allowPattern: '^[a-z]+(_[a-z]+)+$'
		}
	],

	// require the use of `===` and `!==`
	// https://eslint.org/docs/latest/rules/eqeqeq
	'eqeqeq': [
		WARN,
		'always'
	],

	// require grouped accessor pairs in object literals and classes
	// https://eslint.org/docs/latest/rules/grouped-accessor-pairs
	'grouped-accessor-pairs': [
		WARN,
		'getBeforeSet'
	],

	// require `for-in` loops to include an `if` statement
	// https://eslint.org/docs/latest/rules/guard-for-in
	'guard-for-in': OFF,

	// enforce a maximum number of classes per file
	// https://eslint.org/docs/latest/rules/max-classes-per-file
	'max-classes-per-file': [
		WARN,
		1
	],

	// disallow the use of `alert`, `confirm`, and `prompt`
	// https://eslint.org/docs/latest/rules/no-alert
	'no-alert': WARN,

	// disallow the use of `arguments.caller` or `arguments.callee`
	// https://eslint.org/docs/latest/rules/no-caller
	'no-caller': ERROR,

	// disallow lexical declarations in case clauses
	// https://eslint.org/docs/latest/rules/no-case-declarations
	'no-case-declarations': WARN,

	// disallow returning value from constructor
	// https://eslint.org/docs/latest/rules/no-constructor-return
	'no-constructor-return': WARN,

	// disallow division operators explicitly at the beginning of regular expressions
	// https://eslint.org/docs/latest/rules/no-div-regex
	'no-div-regex': OFF,

	// disallow `else` blocks after `return` statements in `if` statements
	// https://eslint.org/docs/latest/rules/no-else-return
	'no-else-return': [
		WARN,
		{
			allowElseIf: false
		}
	],

	// disallow empty functions
	// https://eslint.org/docs/latest/rules/no-empty-function
	'no-empty-function': [
		WARN,
		{
			allow: [ 'arrowFunctions' ]
		}
	],

	// Disallow empty static blocks
	// https://eslint.org/docs/latest/rules/no-empty-static-block
	'no-empty-static-block': WARN,

	// disallow empty destructuring patterns
	// https://eslint.org/docs/latest/rules/no-empty-pattern
	'no-empty-pattern': [
		WARN,
		{
			allowObjectPatternsAsParameters: false
		}
	],

	// disallow `null` comparisons without type-checking operators
	// https://eslint.org/docs/latest/rules/no-eq-null
	// NOTE: might be redundant since 'eqeqeq' is enabled
	'no-eq-null': WARN,

	// disallow the use of `eval()`
	// https://eslint.org/docs/latest/rules/no-eval
	'no-eval': [
		ERROR,
		{
			allowIndirect: false
		}
	],

	// disallow extending native types
	// https://eslint.org/docs/latest/rules/no-extend-native
	'no-extend-native': [
		ERROR,
		{
			exceptions: []
		}
	],

	// disallow unnecessary calls to `.bind()`
	// https://eslint.org/docs/latest/rules/no-extra-bind
	'no-extra-bind': WARN,

	// disallow unnecessary labels
	// https://eslint.org/docs/latest/rules/no-extra-label
	// NOTE: might be redundant since 'no-labels' is enabled
	'no-extra-label': WARN,

	// disallow fallthrough of `case` statements
	// https://eslint.org/docs/latest/rules/no-fallthrough
	'no-fallthrough': [
		WARN,
		{
			commentPattern: 'falls?\\s+through'
		}
	],

	// disallow leading or trailing decimal points in numeric literals
	// https://eslint.org/docs/latest/rules/no-floating-decimal
	'no-floating-decimal': WARN,

	// disallow assignments to native objects or read-only global variables
	// https://eslint.org/docs/latest/rules/no-global-assign
	'no-global-assign': [
		ERROR,
		{
			exceptions: []
		}
	],

	// disallow shorthand type conversions
	// https://eslint.org/docs/latest/rules/no-implicit-coercion
	'no-implicit-coercion': [
		WARN,
		{
			boolean: true,
			number: true,
			string: false,
			allow: []
		}
	],

	// disallow declarations in the global scope
	// https://eslint.org/docs/latest/rules/no-implicit-globals
	'no-implicit-globals': [
		ERROR,
		{
			lexicalBindings: false
		}
	],

	// disallow the use of `eval()`-like methods
	// https://eslint.org/docs/latest/rules/no-implied-eval
	'no-implied-eval': ERROR,

	// disallow `this` keywords outside of classes or class-like objects
	// https://eslint.org/docs/latest/rules/no-invalid-this
	'no-invalid-this': [
		WARN,
		{
			capIsConstructor: true
		}
	],

	// disallow the use of the `__iterator__` property
	// https://eslint.org/docs/latest/rules/no-iterator
	'no-iterator': WARN,

	// disallow labeled statements
	// https://eslint.org/docs/latest/rules/no-labels
	'no-labels': [
		WARN,
		{
			allowLoop: false,
			allowSwitch: false
		}
	],

	// disallow unnecessary nested blocks
	// https://eslint.org/docs/latest/rules/no-lone-blocks
	'no-lone-blocks': WARN,

	// disallow function declarations that contain unsafe references inside loop statements
	// https://eslint.org/docs/latest/rules/no-loop-func
	'no-loop-func': WARN,

	// disallow magic numbers
	// https://eslint.org/docs/latest/rules/no-magic-numbers
	// NOTE: flags calculations like `DAY = 24 * 60 * 60 * 1000`
	'no-magic-numbers': OFF,

	// disallow multiple spaces
	// https://eslint.org/docs/latest/rules/no-multi-spaces
	// NOTE: we undo the exception set by default to Property since the `key-spacing` rule is set up accordingly
	'no-multi-spaces': [
		WARN,
		{
			ignoreEOLComments: true,
			exceptions: {
				Property: false
			}
		}
	],

	// disallow multiline strings
	// https://eslint.org/docs/latest/rules/no-multi-str
	'no-multi-str': OFF,

	// disallow `new` operators outside of assignments or comparisons
	// https://eslint.org/docs/latest/rules/no-new
	'no-new': ERROR,

	// disallow `new` operators with the `Function` object
	// https://eslint.org/docs/latest/rules/no-new-func
	'no-new-func': ERROR,

	// disallow `new` operators with the `String`, `Number`, and `Boolean` objects
	// https://eslint.org/docs/latest/rules/no-new-wrappers
	'no-new-wrappers': WARN,

	// disallow `\8` and `\9` escape sequences in string literals
	// https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
	'no-nonoctal-decimal-escape': WARN,

	// disallow octal literals
	// https://eslint.org/docs/latest/rules/no-octal
	'no-octal': WARN,

	// disallow octal escape sequences in string literals
	// https://eslint.org/docs/latest/rules/no-octal-escape
	'no-octal-escape': WARN,

	// disallow reassigning `function` parameters
	// https://eslint.org/docs/latest/rules/no-param-reassign
	'no-param-reassign': [
		ERROR,
		{
			props: false
		}
	],

	// disallow the use of the `__proto__` property
	// https://eslint.org/docs/latest/rules/no-proto
	'no-proto': WARN,

	// disallow variable redeclaration
	// https://eslint.org/docs/latest/rules/no-redeclare
	'no-redeclare': [
		ERROR,
		{
			builtinGlobals: true
		}
	],

	// disallow certain properties on certain objects
	// https://eslint.org/docs/latest/rules/no-restricted-properties
	'no-restricted-properties': OFF,

	// disallow assignment operators in `return` statements
	// https://eslint.org/docs/latest/rules/no-return-assign
	'no-return-assign': [
		WARN,
		'except-parens'
	],

	// disallow `javascript:` urls
	// https://eslint.org/docs/latest/rules/no-script-url
	'no-script-url': ERROR,

	// disallow assignments where both sides are exactly the same
	// https://eslint.org/docs/latest/rules/no-self-assign
	'no-self-assign': [
		WARN,
		{
			props: true
		}
	],

	// disallow comparisons where both sides are exactly the same
	// https://eslint.org/docs/latest/rules/no-self-compare
	'no-self-compare': WARN,

	// disallow comma operators
	// https://eslint.org/docs/latest/rules/no-sequences
	'no-sequences': [
		WARN,
		{
			allowInParentheses: false
		}
	],

	// disallow throwing literals as exceptions
	// https://eslint.org/docs/latest/rules/no-throw-literal
	'no-throw-literal': WARN,

	// disallow unmodified loop conditions
	// https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
	'no-unmodified-loop-condition': WARN,

	// disallow unused expressions
	// https://eslint.org/docs/latest/rules/no-unused-expressions
	'no-unused-expressions': [
		WARN,
		{
			allowShortCircuit: true,
			allowTernary: false,
			allowTaggedTemplates: false
		}
	],

	// disallow unused labels
	// https://eslint.org/docs/latest/rules/no-unused-labels
	// NOTE: might be redundant since 'no-labels' is enabled
	'no-unused-labels': WARN,

	// disallow unnecessary calls to `.call()` and `.apply()`
	// https://eslint.org/docs/latest/rules/no-useless-call
	'no-useless-call': WARN,

	// disallow unnecessary `catch` clauses
	// https://eslint.org/docs/latest/rules/no-useless-catch
	'no-useless-catch': WARN,

	// disallow unnecessary concatenation of literals or template literals
	// https://eslint.org/docs/latest/rules/no-useless-concat
	'no-useless-concat': WARN,

	// disallow unnecessary escape characters
	// https://eslint.org/docs/latest/rules/no-useless-escape
	'no-useless-escape': WARN,

	// disallow redundant return statements
	// https://eslint.org/docs/latest/rules/no-useless-return
	'no-useless-return': WARN,

	// disallow `void` operators
	// https://eslint.org/docs/latest/rules/no-void
	'no-void': [
		WARN,
		{
			allowAsStatement: true
		}
	],

	// disallow specified warning terms in comments
	// https://eslint.org/docs/latest/rules/no-warning-comments
	'no-warning-comments': [
		WARN,
		{
			terms: [ 'todo', 'fixme', 'future' ],
			location: 'start'
		}
	],

	// disallow `with` statements
	// https://eslint.org/docs/latest/rules/no-with
	'no-with': ERROR,

	// enforce using named capture group in regular expression
	// https://eslint.org/docs/latest/rules/prefer-named-capture-group
	'prefer-named-capture-group': OFF,

	// require using Error objects as Promise rejection reasons
	// https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
	'prefer-promise-reject-errors': [
		WARN,
		{
			allowEmptyReject: false
		}
	],

	// disallow use of the `RegExp` constructor in favor of regular expression literals
	// https://eslint.org/docs/latest/rules/prefer-regex-literals
	'prefer-regex-literals': [
		WARN,
		{
			disallowRedundantWrapping: true
		}
	],

	// enforce the consistent use of the radix argument when using `parseInt()`
	// https://eslint.org/docs/latest/rules/radix
	'radix': OFF,

	// disallow async functions which have no `await` expression
	// https://eslint.org/docs/latest/rules/require-await
	'require-await': WARN,

	// enforce the use of `u` flag on RegExp
	// https://eslint.org/docs/latest/rules/require-unicode-regexp
	'require-unicode-regexp': OFF,

	// require `var` declarations be placed at the top of their containing scope
	// https://eslint.org/docs/latest/rules/vars-on-top
	'vars-on-top': WARN,

	// require parentheses around immediate `function` invocations
	// https://eslint.org/docs/latest/rules/wrap-iife
	'wrap-iife': [
		WARN,
		'inside',
		{
			functionPrototypeMethods: true
		}
	],

	// require or disallow 'Yoda' conditions
	// https://eslint.org/docs/latest/rules/yoda
	'yoda': [
		WARN,
		'never',
		{
			exceptRange: false,
			onlyEquality: false
		}
	],

	// require or disallow strict mode directives
	// https://eslint.org/docs/latest/rules/strict
	'strict': [
		WARN,
		'safe'
	],

	// require or disallow initialization in variable declarations
	// https://eslint.org/docs/latest/rules/init-declarations
	'init-declarations': OFF,

	// Require or disallow logical assignment operator shorthand
	// https://eslint.org/docs/latest/rules/logical-assignment-operators
	'logical-assignment-operators': [
		WARN,
		'always',
		{
			enforceForIfStatements: true
		}
	],

	// disallow deleting variables
	// https://eslint.org/docs/latest/rules/no-delete-var
	'no-delete-var': ERROR,

	// disallow labels that share a name with a variable
	// https://eslint.org/docs/latest/rules/no-label-var
	// NOTE: might be redundant since 'no-labels' is enabled
	'no-label-var': ERROR,

	// disallow specified global variables
	// https://eslint.org/docs/latest/rules/no-restricted-globals
	'no-restricted-globals': OFF,

	// disallow variable declarations from shadowing variables declared in the outer scope
	// https://eslint.org/docs/latest/rules/no-shadow
	'no-shadow': [
		ERROR,
		{
			builtinGlobals: false,
			hoist: 'functions',
			allow: []
		}
	],

	// disallow identifiers from shadowing restricted names
	// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
	'no-shadow-restricted-names': ERROR,

	// disallow the use of undeclared variables unless mentioned in `/*global */` comments
	// https://eslint.org/docs/latest/rules/no-undef
	'no-undef': [
		ERROR,
		{
			'typeof': false
		}
	],

	// disallow initializing variables to `undefined`
	// https://eslint.org/docs/latest/rules/no-undef-init
	'no-undef-init': WARN,

	// disallow the use of `undefined` as an identifier
	// https://eslint.org/docs/latest/rules/no-undefined
	'no-undefined': OFF,

	// disallow unused variables
	// https://eslint.org/docs/latest/rules/no-unused-vars
	'no-unused-vars': [
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
	// https://eslint.org/docs/latest/rules/no-use-before-define
	'no-use-before-define': [
		ERROR,
		{
			functions: false,
			classes: true,
			variables: true
		}
	],

	// enforce linebreaks after opening and before closing array brackets
	// https://eslint.org/docs/latest/rules/array-bracket-newline
	'array-bracket-newline': [
		WARN,
		{
			multiline: true,
			minItems: null
		}
	],

	// enforce consistent spacing inside array brackets
	// https://eslint.org/docs/latest/rules/array-bracket-spacing
	'array-bracket-spacing': [
		WARN,
		'always',
		{
			singleValue: true,
			objectsInArrays: true,
			arraysInArrays: true
		}
	],

	// enforce line breaks after each array element
	// https://eslint.org/docs/latest/rules/array-element-newline
	'array-element-newline': [
		WARN,
		'consistent'
	],

	// disallow or enforce spaces inside of blocks after opening block and before closing block
	// https://eslint.org/docs/latest/rules/block-spacing
	// NOTE: might be redundant since 'brace-style' is enabled
	'block-spacing': [
		OFF,
		'always'
	],

	// enforce consistent brace style for blocks
	// https://eslint.org/docs/latest/rules/brace-style
	'brace-style': [
		WARN,
		'stroustrup',
		{
			allowSingleLine: false
		}
	],

	// enforce camelcase naming convention
	// https://eslint.org/docs/latest/rules/camelcase
	'camelcase': [
		WARN,
		{
			properties: 'always',
			ignoreDestructuring: false,
			ignoreImports: false,
			ignoreGlobals: true,
			allow: []
		}
	],

	// enforce or disallow capitalization of the first letter of a comment
	// https://eslint.org/docs/latest/rules/capitalized-comments
	'capitalized-comments': OFF,

	// require or disallow trailing commas
	// https://eslint.org/docs/latest/rules/comma-dangle
	'comma-dangle': [
		WARN,
		{
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}
	],

	// enforce consistent spacing before and after commas
	// https://eslint.org/docs/latest/rules/comma-spacing
	'comma-spacing': [
		WARN,
		{
			before: false,
			after: true
		}
	],

	// enforce consistent comma style
	// https://eslint.org/docs/latest/rules/comma-style
	'comma-style': [
		WARN,
		'last',
		{
			exceptions: {}
		}
	],

	// enforce consistent spacing inside computed property brackets
	// https://eslint.org/docs/latest/rules/computed-property-spacing
	'computed-property-spacing': [
		WARN,
		'never',
		{
			enforceForClassMembers: true
		}
	],

	// enforce consistent naming when capturing the current execution context
	// https://eslint.org/docs/latest/rules/consistent-this
	// NOTE: nowadays arrow functions are preferable, might get used for legacy codebases though
	'consistent-this': [
		WARN,
		'that'
	],

	// require or disallow newline at the end of files
	// https://eslint.org/docs/latest/rules/eol-last
	'eol-last': [
		WARN,
		'always'
	],

	// require or disallow spacing between function identifiers and their invocations
	// https://eslint.org/docs/latest/rules/func-call-spacing
	'func-call-spacing': [
		WARN,
		'never'
	],

	// require function names to match the name of the variable or property to which they are assigned
	// https://eslint.org/docs/latest/rules/func-name-matching
	'func-name-matching': [
		WARN,
		'always',
		{
			considerPropertyDescriptor: false,
			includeCommonJSModuleExports: false
		}
	],

	// require or disallow named `function` expressions
	// https://eslint.org/docs/latest/rules/func-names
	'func-names': OFF,

	// enforce the consistent use of either `function` declarations or expressions
	// https://eslint.org/docs/latest/rules/func-style
	'func-style': OFF,

	// enforce line breaks between arguments of a function call
	// https://eslint.org/docs/latest/rules/function-call-argument-newline
	'function-call-argument-newline': [
		WARN,
		'consistent'
	],

	// enforce consistent line breaks inside function parentheses
	// https://eslint.org/docs/latest/rules/function-paren-newline
	'function-paren-newline': [
		WARN,
		'multiline-arguments'
	],

	// disallow specified identifiers
	// https://eslint.org/docs/latest/rules/id-denylist
	'id-denylist': OFF,

	// enforce minimum and maximum identifier lengths
	// https://eslint.org/docs/latest/rules/id-length
	'id-length': [
		WARN,
		{
			min: 1,
			max: 32,
			properties: 'always',
			exceptions: [],
			exceptionPatterns: []
		}
	],

	// require identifiers to match a specified regular expression
	// https://eslint.org/docs/latest/rules/id-match
	'id-match': OFF,

	// enforce the location of arrow function bodies
	// https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
	'implicit-arrow-linebreak': [
		WARN,
		'beside'
	],

	// enforce consistent indentation
	// https://eslint.org/docs/latest/rules/indent
	'indent': [
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

	// enforce the consistent use of either double or single quotes in JSX attributes
	// https://eslint.org/docs/latest/rules/jsx-quotes
	'jsx-quotes': [
		WARN,
		'prefer-single'
	],

	// enforce consistent spacing between keys and values in object literal properties
	// https://eslint.org/docs/latest/rules/key-spacing
	'key-spacing': [
		WARN,
		{
			beforeColon: false,
			afterColon: true,
			mode: 'strict'
		}
	],

	// enforce consistent spacing before and after keywords
	// https://eslint.org/docs/latest/rules/keyword-spacing
	'keyword-spacing': [
		WARN,
		{
			before: true,
			after: true,
			overrides: {}
		}
	],

	// enforce position of line comments
	// https://eslint.org/docs/latest/rules/line-comment-position
	'line-comment-position': [
		WARN,
		{
			position: 'above',
			applyDefaultIgnorePatterns: true
		}
	],

	// enforce consistent linebreak style
	// https://eslint.org/docs/latest/rules/linebreak-style
	'linebreak-style': [
		WARN,
		'unix'
	],

	// require empty lines around comments
	// https://eslint.org/docs/latest/rules/lines-around-comment
	'lines-around-comment': [
		WARN,
		{
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: false,
			afterLineComment: false,
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
	// https://eslint.org/docs/latest/rules/lines-between-class-members
	'lines-between-class-members': [
		WARN,
		'always',
		{
			exceptAfterSingleLine: true
		}
	],

	// enforce a maximum depth that blocks can be nested
	// https://eslint.org/docs/latest/rules/max-depth
	'max-depth': [
		WARN,
		{
			max: 5
		}
	],

	// enforce a maximum line length
	// https://eslint.org/docs/latest/rules/max-len
	'max-len': OFF,

	// enforce a maximum number of lines per file
	// https://eslint.org/docs/latest/rules/max-lines
	'max-lines': OFF,

	// enforce a maximum number of line of code in a function
	// https://eslint.org/docs/latest/rules/max-lines-per-function
	'max-lines-per-function': OFF,

	// enforce a maximum depth that callbacks can be nested
	// https://eslint.org/docs/latest/rules/max-nested-callbacks
	'max-nested-callbacks': [
		WARN,
		{
			max: 3
		}
	],

	// enforce a maximum number of parameters in function definitions
	// https://eslint.org/docs/latest/rules/max-params
	'max-params': [
		WARN,
		{
			max: 5
		}
	],

	// enforce a maximum number of statements allowed in function blocks
	// https://eslint.org/docs/latest/rules/max-statements
	'max-statements': OFF,

	// enforce a maximum number of statements allowed per line
	// https://eslint.org/docs/latest/rules/max-statements-per-line
	'max-statements-per-line': [
		WARN,
		{
			max: 1
		}
	],

	// enforce a particular style for multiline comments
	// https://eslint.org/docs/latest/rules/multiline-comment-style
	'multiline-comment-style': OFF,

	// enforce newlines between operands of ternary expressions
	// https://eslint.org/docs/latest/rules/multiline-ternary
	'multiline-ternary': [
		WARN,
		'always-multiline'
	],

	// require constructor names to begin with a capital letter
	// https://eslint.org/docs/latest/rules/new-cap
	'new-cap': [
		WARN,
		{
			newIsCap: true,
			capIsNew: true,
			properties: true
		}
	],

	// enforce or disallow parentheses when invoking a constructor with no arguments
	// https://eslint.org/docs/latest/rules/new-parens
	'new-parens': [
		WARN,
		'always'
	],

	// require a newline after each call in a method chain
	// https://eslint.org/docs/latest/rules/newline-per-chained-call
	'newline-per-chained-call': [
		WARN,
		{
			ignoreChainWithDepth: 2
		}
	],

	// disallow `Array` constructors
	// https://eslint.org/docs/latest/rules/no-array-constructor
	'no-array-constructor': WARN,

	// disallow bitwise operators
	// https://eslint.org/docs/latest/rules/no-bitwise
	'no-bitwise': OFF,

	// disallow `continue` statements
	// https://eslint.org/docs/latest/rules/no-continue
	'no-continue': OFF,

	// disallow inline comments after code
	// https://eslint.org/docs/latest/rules/no-inline-comments
	'no-inline-comments': [
		WARN,
		{
			ignorePattern: 'webpackChunkName:.+'
		}
	],

	// disallow `if` statements as the only statement in `else` blocks
	// https://eslint.org/docs/latest/rules/no-lonely-if
	'no-lonely-if': WARN,

	// disallow mixed binary operators
	// https://eslint.org/docs/latest/rules/no-mixed-operators
	'no-mixed-operators': [
		WARN,
		{
			groups: [
				[ '*', '/', '%' ],
				[ '+', '-' ],
				[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
				[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
				[ '&&', '||' ],
				[ 'in', 'instanceof' ]
			],
			allowSamePrecedence: true
		}
	],

	// disallow mixed spaces and tabs for indentation
	// https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
	'no-mixed-spaces-and-tabs': [
		WARN,
		'smart-tabs'
	],

	// disallow use of chained assignment expressions
	// https://eslint.org/docs/latest/rules/no-multi-assign
	'no-multi-assign': [
		WARN,
		{
			ignoreNonDeclaration: true
		}
	],

	// disallow multiple empty lines
	// https://eslint.org/docs/latest/rules/no-multiple-empty-lines
	'no-multiple-empty-lines': [
		WARN,
		{
			max: 3,
			maxEOF: 0,
			maxBOF: 0
		}
	],

	// disallow negated conditions
	// https://eslint.org/docs/latest/rules/no-negated-condition
	'no-negated-condition': WARN,

	// disallow nested ternary expressions
	// https://eslint.org/docs/latest/rules/no-nested-ternary
	'no-nested-ternary': OFF,

	// disallow `Object` constructors
	// https://eslint.org/docs/latest/rules/no-object-constructor
	'no-object-constructor': WARN,

	// disallow the unary operators `++` and `--`
	// https://eslint.org/docs/latest/rules/no-plusplus
	'no-plusplus': OFF,

	// disallow specified syntax
	// https://eslint.org/docs/latest/rules/no-restricted-syntax
	'no-restricted-syntax': [
		ERROR,
		'WithStatement',
		'BinaryExpression[operator="in"]'
	],

	// disallow all tabs
	// https://eslint.org/docs/latest/rules/no-tabs
	'no-tabs': OFF,

	// disallow ternary operators
	// https://eslint.org/docs/latest/rules/no-ternary
	'no-ternary': OFF,

	// disallow trailing whitespace at the end of lines
	// https://eslint.org/docs/latest/rules/no-trailing-spaces
	'no-trailing-spaces': [
		WARN,
		{
			skipBlankLines: false,
			ignoreComments: false
		}
	],

	// disallow dangling underscores in identifiers
	// https://eslint.org/docs/latest/rules/no-underscore-dangle
	// NOTE: codebases that need to control member visibility should migrate to TypeScript
	'no-underscore-dangle': [
		WARN,
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
	// https://eslint.org/docs/latest/rules/no-unneeded-ternary
	'no-unneeded-ternary': [
		WARN,
		{
			defaultAssignment: true
		}
	],

	// disallow whitespace before properties
	// https://eslint.org/docs/latest/rules/no-whitespace-before-property
	'no-whitespace-before-property': WARN,

	// enforce the location of single-line statements
	// https://eslint.org/docs/latest/rules/nonblock-statement-body-position
	// NOTE: `curly` is set to enforce blocks even around single statements
	'nonblock-statement-body-position': OFF,

	// enforce consistent line breaks inside braces
	// https://eslint.org/docs/latest/rules/object-curly-newline
	'object-curly-newline': [
		WARN,
		{
			ObjectExpression: {
				consistent: true,
				minProperties: 2
			},
			ObjectPattern: {
				multiline: true
			},
			ImportDeclaration: {
				multiline: true
			},
			ExportDeclaration: {
				multiline: true
			}
		}
	],

	// enforce consistent spacing inside braces
	// https://eslint.org/docs/latest/rules/object-curly-spacing
	'object-curly-spacing': [
		WARN,
		'always',
		{
			arraysInObjects: true,
			objectsInObjects: true
		}
	],

	// enforce placing object properties on separate lines
	// https://eslint.org/docs/latest/rules/object-property-newline
	'object-property-newline': [
		WARN,
		{
			allowAllPropertiesOnSameLine: false
		}
	],

	// enforce variables to be declared either together or separately in functions
	// https://eslint.org/docs/latest/rules/one-var
	'one-var': [
		WARN,
		{
			var: 'never',
			let: 'never',
			const: 'never'
		}
	],

	// require or disallow newlines around variable declarations
	// https://eslint.org/docs/latest/rules/one-var-declaration-per-line
	'one-var-declaration-per-line': [
		WARN,
		'always'
	],

	// require or disallow assignment operator shorthand where possible
	// https://eslint.org/docs/latest/rules/operator-assignment
	'operator-assignment': [
		WARN,
		'always'
	],

	// enforce consistent linebreak style for operators
	// https://eslint.org/docs/latest/rules/operator-linebreak
	'operator-linebreak': [
		WARN,
		'after',
		{
			overrides: {
				'?': 'before',
				':': 'before'
			}
		}
	],

	// require or disallow padding within blocks
	// https://eslint.org/docs/latest/rules/padded-blocks
	'padded-blocks': [
		WARN,
		{
			blocks: 'never',
			classes: 'never',
			switches: 'never'
		},
		{
			allowSingleLineBlocks: false
		}
	],

	// require or disallow padding lines between statements
	// https://eslint.org/docs/latest/rules/padding-line-between-statements
	'padding-line-between-statements': [
		WARN,
		{
			blankLine: 'always',
			prev: 'block-like',
			next: '*'
		}
	],

	// disallow the use of `Math.pow` in favor of the `**` operator
	// https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
	'prefer-exponentiation-operator': WARN,

	// disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
	// https://eslint.org/docs/latest/rules/prefer-object-spread
	'prefer-object-spread': WARN,

	// require quotes around object literal property names
	// https://eslint.org/docs/latest/rules/quote-props
	'quote-props': [
		WARN,
		'consistent-as-needed',
		{
			keywords: true,
			numbers: true
		}
	],

	// enforce the consistent use of either backticks, double, or single quotes
	// https://eslint.org/docs/latest/rules/quotes
	'quotes': [
		WARN,
		'single',
		{
			avoidEscape: true,
			allowTemplateLiterals: true
		}
	],

	// require or disallow semicolons instead of ASI
	// https://eslint.org/docs/latest/rules/semi
	'semi': [
		WARN,
		'always',
		{
			omitLastInOneLineBlock: false
		}
	],

	// enforce consistent spacing before and after semicolons
	// https://eslint.org/docs/latest/rules/semi-spacing
	'semi-spacing': [
		WARN,
		{
			before: false,
			after: true
		}
	],

	// enforce location of semicolons
	// https://eslint.org/docs/latest/rules/semi-style
	'semi-style': [
		WARN,
		'last'
	],

	// require object keys to be sorted
	// https://eslint.org/docs/latest/rules/sort-keys
	'sort-keys': OFF,

	// require variables within the same declaration block to be sorted
	// https://eslint.org/docs/latest/rules/sort-vars
	'sort-vars': OFF,

	// enforce consistent spacing before blocks
	// https://eslint.org/docs/latest/rules/space-before-blocks
	'space-before-blocks': [
		WARN,
		{
			functions: 'always',
			keywords: 'always',
			classes: 'always'
		}
	],

	// enforce consistent spacing before `function` definition opening parenthesis
	// https://eslint.org/docs/latest/rules/space-before-function-paren
	'space-before-function-paren': [
		WARN,
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}
	],

	// enforce consistent spacing inside parentheses
	// https://eslint.org/docs/latest/rules/space-in-parens
	'space-in-parens': [
		WARN,
		'never',
		{
			exceptions: []
		}
	],

	// require spacing around infix operators
	// https://eslint.org/docs/latest/rules/space-infix-ops
	'space-infix-ops': [
		WARN,
		{
			int32Hint: true
		}
	],

	// enforce consistent spacing before or after unary operators
	// https://eslint.org/docs/latest/rules/space-unary-ops
	'space-unary-ops': [
		WARN,
		{
			words: true,
			nonwords: false,
			overrides: {}
		}
	],

	// enforce consistent spacing after the `//` or `/*` in a comment
	// https://eslint.org/docs/latest/rules/spaced-comment
	'spaced-comment': [
		WARN,
		'always',
		{
			line: {
				markers: [ '/', '#region', '#endregion' ]
			},
			block: {
				markers: [ '*' ],
				balanced: true
			}
		}
	],

	// enforce spacing around colons of switch statements
	// https://eslint.org/docs/latest/rules/switch-colon-spacing
	'switch-colon-spacing': [
		WARN,
		{
			after: true,
			before: false
		}
	],

	// require or disallow spacing between template tags and their literals
	// https://eslint.org/docs/latest/rules/template-tag-spacing
	'template-tag-spacing': [
		WARN,
		'never'
	],

	// require or disallow Unicode byte order mark (BOM)
	// https://eslint.org/docs/latest/rules/unicode-bom
	'unicode-bom': [
		OFF,
		'never'
	],

	// require parenthesis around regex literals
	// https://eslint.org/docs/latest/rules/wrap-regex
	'wrap-regex': OFF,

	// require braces around arrow function bodies
	// https://eslint.org/docs/latest/rules/arrow-body-style
	'arrow-body-style': [
		WARN,
		'as-needed'
	],

	// require parentheses around arrow function arguments
	// https://eslint.org/docs/latest/rules/arrow-parens
	'arrow-parens': [
		WARN,
		'as-needed',
		{
			requireForBlockBody: false
		}
	],

	// enforce consistent spacing before and after the arrow in arrow functions
	// https://eslint.org/docs/latest/rules/arrow-spacing
	'arrow-spacing': [
		WARN,
		{
			before: true,
			after: true
		}
	],

	// require `super()` calls in constructors
	// https://eslint.org/docs/latest/rules/constructor-super
	'constructor-super': ERROR,

	// enforce consistent spacing around `*` operators in generator functions
	// https://eslint.org/docs/latest/rules/generator-star-spacing
	'generator-star-spacing': [
		WARN,
		{
			before: false,
			after: true
		}
	],

	// disallow reassigning class members
	// https://eslint.org/docs/latest/rules/no-class-assign
	'no-class-assign': ERROR,

	// disallow arrow functions where they could be confused with comparisons
	// https://eslint.org/docs/latest/rules/no-confusing-arrow
	// NOTE: often gets annoying, syntax highlighters make this obvious enough
	'no-confusing-arrow': OFF,

	// disallow reassigning `const` variables
	// https://eslint.org/docs/latest/rules/no-const-assign
	'no-const-assign': ERROR,

	// Disallow expressions where the operation doesn't affect the value
	// https://eslint.org/docs/latest/rules/no-constant-binary-expression
	'no-constant-binary-expression': WARN,

	// disallow duplicate class members
	// https://eslint.org/docs/latest/rules/no-dupe-class-members
	'no-dupe-class-members': ERROR,

	// disallow duplicate module imports
	// https://eslint.org/docs/latest/rules/no-duplicate-imports
	'no-duplicate-imports': [
		WARN,
		{
			includeExports: true
		}
	],

	// disallow `new` operators with the `Symbol` object
	// https://eslint.org/docs/latest/rules/no-new-symbol
	'no-new-symbol': ERROR,

	// disallow specified names in exports
	// https://eslint.org/docs/latest/rules/no-restricted-exports
	'no-restricted-exports': OFF,

	// disallow specified modules when loaded by `import`
	// https://eslint.org/docs/latest/rules/no-restricted-imports
	'no-restricted-imports': OFF,

	// disallow `this`/`super` before calling `super()` in constructors
	// https://eslint.org/docs/latest/rules/no-this-before-super
	'no-this-before-super': ERROR,

	// disallow unnecessary computed property keys in objects and classes
	// https://eslint.org/docs/latest/rules/no-useless-computed-key
	'no-useless-computed-key': [
		WARN,
		{
			enforceForClassMembers: true
		}
	],

	// disallow unnecessary constructors
	// https://eslint.org/docs/latest/rules/no-useless-constructor
	'no-useless-constructor': WARN,

	// disallow renaming import, export, and destructured assignments to the same name
	// https://eslint.org/docs/latest/rules/no-useless-rename
	'no-useless-rename': [
		WARN,
		{
			ignoreImport: false,
			ignoreExport: false,
			ignoreDestructuring: false
		}
	],

	// require `let` or `const` instead of `var`
	// https://eslint.org/docs/latest/rules/no-var
	'no-var': ERROR,

	// require or disallow method and property shorthand syntax for object literals
	// https://eslint.org/docs/latest/rules/object-shorthand
	'object-shorthand': [
		WARN,
		'always',
		{
			avoidQuotes: true,
			ignoreConstructors: true,
			avoidExplicitReturnArrows: true
		}
	],

	// require using arrow functions for callbacks
	// https://eslint.org/docs/latest/rules/prefer-arrow-callback
	'prefer-arrow-callback': [
		WARN,
		{
			allowNamedFunctions: false,
			allowUnboundThis: true
		}
	],

	// require `const` declarations for variables that are never reassigned after declared
	// https://eslint.org/docs/latest/rules/prefer-const
	'prefer-const': [
		WARN,
		{
			destructuring: 'all',
			ignoreReadBeforeAssign: true
		}
	],

	// require destructuring from arrays and/or objects
	// https://eslint.org/docs/latest/rules/prefer-destructuring
	'prefer-destructuring': [
		WARN,
		{
			VariableDeclarator: {
				array: false, // array destructuring uses iterators and is MUCH slower than direct access
				object: true
			},
			AssignmentExpression: {
				array: false,
				object: false
			}
		},
		{
			enforceForRenamedProperties: false
		}
	],

	// disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
	// https://eslint.org/docs/latest/rules/prefer-numeric-literals
	'prefer-numeric-literals': WARN,

	// Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	// https://eslint.org/docs/latest/rules/prefer-object-has-own
	'prefer-object-has-own': WARN,

	// require rest parameters instead of `arguments`
	// https://eslint.org/docs/latest/rules/prefer-rest-params
	// NOTE: `arguments` are often used for performance reasons
	'prefer-rest-params': OFF,

	// require spread operators instead of `.apply()`
	// https://eslint.org/docs/latest/rules/prefer-spread
	// NOTE: `fn.apply()` is still very useful with `arguments`
	'prefer-spread': OFF,

	// require template literals instead of string concatenation
	// https://eslint.org/docs/latest/rules/prefer-template
	// NOTE: disabled mainly to allow fast stringify using '' + n
	'prefer-template': OFF,

	// require generator functions to contain `yield`
	// https://eslint.org/docs/latest/rules/require-yield
	'require-yield': WARN,

	// enforce spacing between rest and spread operators and their expressions
	// https://eslint.org/docs/latest/rules/rest-spread-spacing
	'rest-spread-spacing': [
		WARN,
		'never'
	],

	// enforce sorted import declarations within modules
	// https://eslint.org/docs/latest/rules/sort-imports
	// NOTE: overridden by 'import/order'
	'sort-imports': OFF,

	// require symbol descriptions
	// https://eslint.org/docs/latest/rules/symbol-description
	'symbol-description': WARN,

	// require or disallow spacing around embedded expressions of template strings
	// https://eslint.org/docs/latest/rules/template-curly-spacing
	'template-curly-spacing': [
		WARN,
		'never'
	],

	// require or disallow spacing around the `*` in `yield*` expressions
	// https://eslint.org/docs/latest/rules/yield-star-spacing
	'yield-star-spacing': [
		WARN,
		{
			before: false,
			after: true
		}
	]
};

module.exports = {
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules
};
