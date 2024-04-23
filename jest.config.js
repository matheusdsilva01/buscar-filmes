// jest.config.js
const nextJest = require("next/jest");

process.env.TZ = "UTC";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  clearMocks: true,
  modulePaths: ["<rootDir>"],
  // Add more setup options before each test is run
  moduleNameMapper: {
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
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "./src/components/**/*.{ts,tsx}",
    "!./src/app/**/*.{ts,tsx}"
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"]
});
