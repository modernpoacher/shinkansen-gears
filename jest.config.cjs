module.exports = {
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
  moduleFileExtensions: ['js', 'jsx', 'mjs']
}
