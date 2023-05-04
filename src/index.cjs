require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

const { default: Gears } = require('./gears/index.cjs')

module.exports.Gears = Gears
