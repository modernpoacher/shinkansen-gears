module.exports = {
  bail: true,
  verbose: true,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: './coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|mts?|jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs']
}
