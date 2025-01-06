import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
// .eslintrc.js
module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    'no-console': 'off', // Disable no-console rule
    'react/jsx-no-target-blank': 'off', // Disable JSX rule for target=_blank
  },
}
