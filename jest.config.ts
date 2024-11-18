export {};
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/vendor/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.module\\.(css|scss)$": "jest-scss-transform",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "setupTests.ts",
    "main.tsx",
    "App.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Optional: Set minimal threshold for coverage to make sure files are considered
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
