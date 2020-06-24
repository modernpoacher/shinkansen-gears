const debug = require('debug')

const log = debug('shinkansen')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
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
]

const plugins = [
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

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
