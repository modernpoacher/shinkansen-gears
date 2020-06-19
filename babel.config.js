module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        useBuiltIns: 'entry',
        targets: {
          node: 'current',
          browsers: [
            'last 2 versions'
          ]
        },
        corejs: 3
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-export-default-from',
    '@babel/proposal-class-properties',
    [
      'module-resolver', {
        alias: {
          'shinkansen-gears': './src',
          build: './build',
          stories: './stories'
        }
      }
    ]
  ]
}
