import { defineFlatConfig } from 'eslint';

export default defineFlatConfig([
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    // Configuraciones extendidas directamente integradas
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        extends: [
          'plugin:react/recommended',
          'plugin:@typescript-eslint/recommended',
          'prettier',
          'plugin:prettier/recommended',
        ],
      },
    ],
  },
]);
