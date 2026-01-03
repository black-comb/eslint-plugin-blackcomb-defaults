/**
 * @fileoverview blackcomb eslint rules
 * @author Marko Martin
 */

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

import angular from './configs/angular.js';
import javascript from './configs/javascript.js';
import typescript from './configs/typescript.js';

export default {
  meta: {
    name: 'eslint-plugin-blackcomb-defaults',
    version: '2.1.2'
  },
  configs: {
    angular,
    javascript,
    typescript
  }
};
