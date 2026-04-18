import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/", "android/", "ios/", ".expo/"],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  prettierConfig,

  {
    plugins: {
      react,
      "react-native": reactNative,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "react-native/no-single-element-style-arrays": "warn",

      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
