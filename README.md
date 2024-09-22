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

As the "import" plugins officially don't support ESLint 9, the respective dependency must be overridden in the package.json:

```json
  "overrides": {
    "eslint-plugin-deprecation": {
      "eslint": ">=9"
    },
    "eslint-plugin-import": {
      "eslint": ">=9"
    }
  }
```

When using the typescript config, you will also need to install:

```sh
npm install typescript-eslint eslint-plugin-deprecation @eslint/compat --save-dev
```

When using the angular config, you will also need to install:

```sh
npm install angular-eslint --save-dev
```

## Usage

Add the desired `blackcomb-defaults` configuration to the extends property of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": ["plugin:blackcomb-defaults/typescript"]
}
```

The following configurations are available:
* javascript
* typescript
* angular
