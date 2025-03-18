export default {
  bail: true,
  verbose: true,
  rootDir: '.',
  roots: [
    './src'
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(mjs?|jsx?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules\\/(?!react-component-instance)\\/',
    '/node_modules\\/(?!react-component-snapshot)\\/'
  ],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.before-each.mjs',
    '<rootDir>/jest.after-each.mjs'
  ]
}
