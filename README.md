# eslint-plugin-blackcomb-defaults

blackcomb eslint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-blackcomb-defaults` and required dependencies:

```sh
npm install eslint-plugin-blackcomb-defaults eslint-plugin-import eslint-plugin-import-newlines --save-dev
```

When using the typescript config, you will also need to install:

```sh
npm install @typescript-eslint/eslint-plugin eslint-import-resolver-typescript eslint-plugin-deprecation --save-dev
```

When using the angular config, you will also need to install:

```sh
npm install @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser --save-dev
```

## Usage

Add `blackcomb-defaults` to the plugins section of your `.eslintrc` configuration file and the desired configuration to the extends array. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["blackcomb-defaults"],
  "extends": ["plugin:blackcomb-defaults/typescript"]
}
```
