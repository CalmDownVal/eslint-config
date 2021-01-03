# @calmdownval/eslint-config

This is a collection of ESLint rule configurations for some of the most common
JS/TS workflows. It does not extend any other config packages, instead all the
configuration resides within this repository.

## Motivation

This package configures *all* available rules of ESLint itself and all plugins
used. Any overrides and additional config packages, should you need any, must be
applied *after* this config to take effect. This package is intended to serve as
a solid future-proof basis. It (re-)sets all options of all rules even if they
correspond to their current defaults to fixate their behavior as much as
possible.

## Usage

To use this config you will need to install ESLint and any plugins required by
the configurations you choose to use.

```sh
yarn add --dev eslint eslint-plugin-import @calmdownval/eslint-config
```

Then setup your `.eslintrc` file as described below.

### 1. Default Configuration

The default configuration contains only rules that are relevant for any JS
project. This includes all of the core ESLint rules and the Import plugin.

**You should always include this configuration.**

```json
{
  "root": true,
  "extends": [
    "@calmdownval/eslint-config"
  ]
}
```

Required dependencies:

- `eslint`
- `eslint-plugin-import`

### 2. TypeScript Configuration

This configuration replaces some of the default rules to work with TypeScript
and adds plenty additional rules that are TS-specific. Also configures the
Import plugin to resolve TS paths correctly.

Config extension:

```js
"@calmdownval/eslint-config/typescript"
```

Required dependencies:

- `eslint-import-resolver-typescript`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
