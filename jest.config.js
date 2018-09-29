module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: ['src/@(components|utils)/**/*.@(ts|tsx)'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
      isolatedModules: 'true',
    },
  },
};
