import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const typescriptEslint = require("@typescript-eslint/eslint-plugin")
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals")
const prettier = require("eslint-config-prettier")
const importHelpers = require("eslint-plugin-import-helpers")

const config = [
  ...nextCoreWebVitals,
  ...typescriptEslint.configs["flat/recommended"],
  prettier,
  {
    plugins: {
      "import-helpers": importHelpers
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["/^react/", "/^next/"],
            "module",
            ["/^@\\//", "/^features\\//", "/^shared\\//"],
            ["parent", "sibling", "index"]
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true
          }
        }
      ]
    }
  }
]

export default config
