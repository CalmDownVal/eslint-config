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

`.eslintrc`:

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

`.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@calmdownval/eslint-config",
    "@calmdownval/eslint-config/typescript"
  ]
}
```

Required dependencies:

- `eslint-import-resolver-typescript`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

Monorepos and other non-trivial projects may need to reconfigure:

- the `project` parser option [as documented here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject).
- the `project` resolver option [as documented here](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration).

Unfortunately the configs are very similar yet for two different modules so
configuration usually leads to duplication, therefore switching to a JS config
and using a shared constant may be beneficial in such cases. A monorepo with
sub-projects in the `packages` directory might use the following configuration:

```json
{
  "parserOptions": {
    "project": "./packages/**/tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "./packages/**/tsconfig.json"
      }
    }
  }
}
```
