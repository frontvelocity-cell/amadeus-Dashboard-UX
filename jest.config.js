const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  
  // Merged test matching patterns - combining both specific and general patterns
  testMatch: [
    '**/__tests__/**/*.spec.ts',
    '**/__tests__/**/*.+(ts|js)',
    '**/*.(test|spec).+(ts|js)'
  ],
  
  // Combined module name mapping - using dynamic tsconfig paths with manual alias fallback
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
  
  // Coverage configuration - merged from both configs
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.spec.ts',
    '!src/app/**/*.module.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary', 'text', 'lcov']
};