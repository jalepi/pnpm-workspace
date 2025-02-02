import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const code = "{packages,tests}";
const ignore = "{dist,node_modules,test-results}";

export default ts.config(
  prettierConfig,
  { ignores: [`${ignore}/**`, `${code}/*/${ignore}/**`] },
  {
    files: ["*.{cjs,mjs}", `${code}/**/*.{cjs,mjs}`],
    extends: [js.configs.recommended],
    plugins: { prettierPlugin },
  },
  {
    files: [`${code}/**/*.{js,jsx,ts,tsx}`],
    extends: [js.configs.recommended, ...ts.configs.stylisticTypeChecked, ...ts.configs.recommendedTypeChecked],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parser: ts.parser,
      parserOptions: { projectService: true },
    },
    plugins: {
      prettierPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [{ group: ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"] }],
        },
      ],
    },
  },
);
