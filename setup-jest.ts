// Unified setup file for Jest testing environment across React, Angular, and Vue
// Consolidated setup configuration with framework-specific optimizations

// Angular specific setup - must be imported first
import 'jest-preset-angular/setup-jest';

// React testing utilities
import '@testing-library/jest-dom';

// Enzyme setup for React (legacy support)
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// Global test utilities and mocks
global.fetch = require('jest-fetch-mock');

// Mock IntersectionObserver for modern browsers
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Angular DOM polyfills and mocks
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    display: 'none',
    appearance: ['-webkit-appearance']
  })
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => ({
    enumerable: true,
    configurable: true
  })
});

// Vue.js specific setup and universal matchMedia mock
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Unified Jest configuration supporting React, Angular, and Vue
// Optimized for multi-framework testing with shared configuration

module.exports = {
  preset: 'jest-preset-angular',
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  
  // Module file extensions
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'vue'
  ],
  
  // Transform patterns optimized for all frameworks
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      isolatedModules: true,
      tsconfig: 'tsconfig.json'
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(css|scss|sass|less)$': 'jest-transform-css',
    '^.+\\.(png|jpg|jpeg|gif|webp|svg|ico)$': 'jest-transform-stub'
  },
  
  // Module name mapping for path resolution and assets
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
  },
  
  // Test environment
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx,vue}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,js}',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/*.test.{ts,tsx,js,jsx}',
    '!src/**/*.spec.{ts,tsx,js,jsx}',
    '!src/main.{ts,js}',
    '!src/polyfills.ts'
  ],
  
  // Test match patterns
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx,vue}',
    '<rootDir>/src/**/*.{test,spec}.{ts,tsx,js,jsx,vue}'
  ],
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/',
    '/coverage/'
  ],
  
  // Global configuration
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
      stringifyContentPathRegex: '\\.html$'
    }
  },
  
  // Cache configuration
  clearMocks: true,
  restoreMocks: true,
  
  // Timeout configuration
  testTimeout: 10000
};

// Unified Babel configuration for React, Vue, Angular, and React Native
// Optimized for multi-framework development with environment-specific configurations

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['> 1%', 'last 2 versions', 'not dead', 'not ie <= 11']
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        modules: false
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: process.env.NODE_ENV === 'development'
      }
    ],
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true
      }
    ]
  ],
  
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-logical-assignment-operators',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
        corejs: false,
        helpers: true,
        useESModules: true
      }
    ]
  ],
  
  // Environment-specific configurations
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' },
            modules: 'commonjs'
          }
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic'
          }
        ],
        '@babel/preset-typescript'
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs'
      ]
    },
    production: {
      plugins: [
        'transform-remove-console',
        [
          'transform-remove-debugger',
          {
            removeConsole: true
          }
        ]
      ]
    },
    development: {
      plugins: [
        'react-refresh/babel'
      ]
    }
  }
};

{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6", "es2020"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": false,
    "importHelpers": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"],
      "@services/*": ["src/services/*"],
      "@assets/*": ["src/assets/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  },
  "include": [
    "src/**/*",
    "src/**/*.vue",
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.d.ts"
  ],
  "exclude": [
    "node_modules",
    "build",
    "dist",
    "coverage",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "e2e"
  ],
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "strictInputTypes": true,
    "strictAttributeTypes": true,
    "strictSafeNavigationTypes": true,
    "strictDomLocalRefTypes": true,
    "strictOutputEventTypes": true,
    "strictDomEventTypes": true,
    "strictContextGenerics": true,
    "strictLiteralTypes": true
  },
  "vueCompilerOptions": {
    "target": 3,
    "extensions": [".vue"],
    "experimentalDisableTemplateSupport": false
  }
}