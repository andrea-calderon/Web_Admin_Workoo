import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Desactiva la regla que exige importar React en JSX
    },
  },
];
