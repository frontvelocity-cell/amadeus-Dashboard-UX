const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  
  // Merged test matching patterns - comprehensive coverage for all test file locations
  testMatch: [
    '**/__tests__/**/*.spec.ts',
    '**/__tests__/**/*.+(ts|js)',
    '**/*.(test|spec).+(ts|js)'
  ],
  
  // Ignore patterns for better performance
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  
  // Combined module name mapping - dynamic tsconfig paths with manual alias fallback
  moduleNameMapping: {
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: '<rootDir>/'
    }),
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  // Transform configuration for handling different file types
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  
  testEnvironment: 'jsdom',
  
  // Coverage configuration - merged patterns for comprehensive coverage
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/app/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/polyfills.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary', 'text', 'lcov']
};