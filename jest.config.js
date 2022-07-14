// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     coverageReporters: ['text', 'cobertura', 'lcov'],
//     moduleFileExtensions: ['ts', 'tsx', 'js'],
//     setupFilesAfterEnv: ["./jest.setup.js"],
//     testMatch: ['**/*.(test|spec).(ts|tsx)'],
//     collectCoverageFrom: ['**/*.{ts,tsx}'],
//     // roots: ['<rootDir>/admin'],
//     transform: {
//         '^.+\\.tsx?$': 'ts-jest',
//         '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
//     },
//     globals: {
//         'ts-jest': {
//             tsconfig: 'jest.tsconfig.json',
//         },
//     },
// };

// const nextJest = require("next/jest");
// const createJestConfig = nextJest({
//   dir: "./",
// });
// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
//   testMatch: ['**/*.(test|spec).(ts|tsx)'],
// };
// module.exports = createJestConfig(customJestConfig);


const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './admin',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/admin/'],
}

module.exports = createJestConfig(customJestConfig)