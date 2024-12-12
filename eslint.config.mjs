import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import js from "@eslint/js";
import ts from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  ...tailwind.configs["flat/recommended"],
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    extends: ["plugin:tailwindcss/recommended"],
    plugins: ["tailwindcss"],
    rules: {
      "tailwindcss/classnames-order": "off", // Prettierで管理する場合
    },
  },
  {
    extends: "next/core-web-vitals",
    rules: {
      // 他のルール
    },
  },
];
