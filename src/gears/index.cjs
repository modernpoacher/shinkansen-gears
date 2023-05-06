require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-gears/gears')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
