// jest.config.js
const nextJest = require("next/jest");

process.env.TZ = "UTC";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  // all files with .test.tsx extension
  dir: "./src/__tests__/tests/../.."
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  clearMocks: true,
  modulePaths: ["<rootDir>"],
  // Add more setup options before each test is run
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^__tests__/(.*)$": "<rootDir>/src/__tests__/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^context/(.*)$": "<rootDir>/src/context/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^app/(.*)$": "<rootDir>/src/pages/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
    "^tests/(.*)$": "<rootDir>/src/tests/$1",
    "^types/(.*)$": "<rootDir>/src/types/$1",
    "^util/(.*)$": "<rootDir>/src/util/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7).*/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  collectCoverageFrom: [
    "./src/components/**/*.{ts,tsx}",
    "!./src/app/**/*.{ts,tsx}"
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
