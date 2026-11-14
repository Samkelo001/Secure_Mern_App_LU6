const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,

  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',

      globals: {
        ...globals.node
      }
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': 'error',
      'curly': 'error'
    }
  },

  // Jest configuration for test files
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],

    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];
