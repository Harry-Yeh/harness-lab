import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/**",
      "src/**/*.js",
      "src/**/*.d.ts",
      "src/**/*.map"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];