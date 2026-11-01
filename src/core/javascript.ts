/* eslint-disable @typescript-eslint/ban-ts-comment */
import eslint from '@eslint/js';
import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
// @ts-expect-error
import pluginPromise from 'eslint-plugin-promise';
import safeguard from 'eslint-plugin-safeguard';
import security from 'eslint-plugin-security';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

const jsConfig: Linter.Config[] = defineConfig([
  security.configs.recommended,
  importX.flatConfigs.recommended,
  eslint.configs.recommended,
  eslintConfigPrettier,
  perfectionist.configs['recommended-natural'],
  pluginPromise.configs['flat/recommended'],
  { ignores: ['**/node_modules/**', '**/dist/**', '**/temp/**', '**/tpm/**'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      sourceType: 'module',
    },
    name: 'eslint/javascript',
    plugins: {
      prettier,
      safeguard,
      'unused-imports': unusedImports,
    },

    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'consistent-return': 'error',
      eqeqeq: 'error',
      'max-len': ['off', { code: 80 }],
      'no-await-in-loop': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-implicit-coercion': 'warn',
      'no-labels': 'error',
      'no-lonely-if': 'warn',
      'no-nested-ternary': 'warn',
      'no-new-func': 'error',
      'no-param-reassign': ['warn', { props: true }],
      'no-plusplus': 'warn',
      'no-redeclare': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/../*'],
              message: 'Use absolute imports with @alias aliases instead',
            },
          ],
        },
      ],
      'no-shadow': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'no-useless-constructor': 'warn',
      'no-var': 'error',
      'object-shorthand': 'error',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', next: 'return', prev: 'block' },
        { blankLine: 'always', next: 'return', prev: 'const' },
        { blankLine: 'always', next: 'function', prev: '*' },
      ],
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
      ],
      'prefer-template': 'error',
      'prettier/prettier': 'error',
      'promise/always-return': 'error',
      'promise/catch-or-return': 'error',
      'safeguard/no-self-assignments': 'error',
      'safeguard/trycatch-ensurer': 'off',
      'sort-keys': 'off',
      'spaced-comment': ['warn', 'always'],
      'unused-imports/no-unused-imports': 'error',
    },
  },
]);

export default jsConfig;
