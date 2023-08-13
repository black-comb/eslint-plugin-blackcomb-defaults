/**
 * @fileoverview blackcomb eslint rules
 * @author Marko Martin
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    name: 'eslint-plugin-blackcomb-defaults',
    version: '0.1.0'
  },
  configs: {
    angular: require('./configs/angular'),
    javascript: require('./configs/javascript'),
    typescript: require('./configs/typescript')
  }
};
