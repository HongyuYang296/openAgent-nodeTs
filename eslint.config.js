import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    ignores: ['**/node_modules', '**/dist']
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Change rule severity to "warn"
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Specifically for TypeScript files
      '@typescript-eslint/no-explicit-any': ['off']
    }
  }
];
