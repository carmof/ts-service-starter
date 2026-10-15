import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
  { ignores: ['dist', 'coverage'] },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        // tsconfigRootDir: import.meta.dirname
      },
    },
  },
  prettier,
  eslintConfigPrettier,
  {
    files: ['**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  } // tentar entender isso
);
