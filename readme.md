# @calmdownval/eslint-config

This is a collection of ESLint rule configurations for some of the most common
JS/TS workflows. It does not extend any other config packages, all configuration
resides within this repository.

## Motivation

This package configures *all* available rules of ESLint itself and any plugins
used. Any overrides and additional config packages, should you need any, must be
applied *after* this config to take effect. This package is intended to serve as
a solid base for new projects or new ESLint configurations. It (re-)sets all
options of all rules even if they correspond to their current defaults to fixate
their behavior as much as possible.

## Usage

To use this config you will need to install ESLint and any plugins required by
the configurations you choose to use.

```sh
yarn add --dev eslint @calmdownval/eslint-config
```

Then setup your `.eslintrc` file as described below.

### Default Configuration

The default configuration. Configures ESLint core rules.

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

### Import Configuration

Configuration for the import plugin.

`.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@calmdownval/eslint-config",
    "@calmdownval/eslint-config/import"
  ]
}
```

Required dependencies:

- `eslint-plugin-import`

### TypeScript Configuration

This configuration replaces some of the default rules to work with TypeScript
and adds plenty additional rules that are TS-specific. Also configures the
Import plugin to resolve TS paths correctly.

`.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@calmdownval/eslint-config",
    "@calmdownval/eslint-config/typescript",

    // additionally, if using eslint-plugin-import:
    "@calmdownval/eslint-config/import",
    "@calmdownval/eslint-config/typescript-import"
  ]
}
```

Required dependencies:

- `@calmdownval/eslint-import-resolver-typescript`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-import` (optional)

Monorepos and other non-trivial projects may need to reconfigure:

- the `project` parser option [as documented here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject).
- the `project` resolver option [as documented here](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration).

A monorepo with workspaces under the `packages` directory might use the
following configuration:

```json
{
  "parserOptions": {
    "project": "./packages/*/tsconfig.json"
  },

  // additionally, if using eslint-plugin-import:
  "settings": {
    "import/resolver": {
      "@calmdownval/eslint-import-resolver-typescript": {
        "project": "./packages/*/tsconfig.json"
      }
    }
  }
}
```
