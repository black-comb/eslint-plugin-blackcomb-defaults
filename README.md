# eslint-plugin-blackcomb-defaults

blackcomb eslint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-blackcomb-defaults` and required dependencies:

```sh
npm install eslint-plugin-blackcomb-defaults @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-import-newlines --save-dev
```

As the "import" plugin does not officially support ESLint 9, the respective dependency must be overridden in the package.json:

```json
  "overrides": {
    "eslint-plugin-import": {
      "eslint": ">=9"
    }
  }
```

When using the typescript config, you will also need to install:

```sh
npm install typescript-eslint eslint-plugin-deprecation @eslint/compat --save-dev
```

As the "deprecation" plugin does not officially support ESLint 9, the respective dependency must be overridden in the package.json:

```json
  "overrides": {
    "eslint-plugin-deprecation": {
      "eslint": ">=9"
    }
  }
```

When using the angular config, you will also need to install:

```sh
npm install angular-eslint --save-dev
```

## Usage

Add the desired `blackcomb-defaults` configuration to your flat `eslint.config.js` configuration file. When using typescript-eslint, this can look as follows:

```js
// @ts-check
import tseslint from 'typescript-eslint';
import blackcombDefaults from 'eslint-plugin-blackcomb-defaults';

export default tseslint.config(
  ...blackcombDefaults.configs.typescript,
  // ... Your other configs.
);
```

The following configurations are available:
* javascript
* typescript
* angular
