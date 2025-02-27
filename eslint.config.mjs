// Import necessary modules
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for backward compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define ESLint configuration using Flat Config format
export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      quotes: "off", // Fix: Properly disable the rule
      "no-useless-escape": "off", // Fix: Correct rule definition
    },
  },
];
