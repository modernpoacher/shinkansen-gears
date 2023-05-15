require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

const Gears = require('./gears/index.cjs')

module.exports.Gears = Gears
