require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-gears/gears')

const {
  default: component
} = require('./index.jsx')

log('`shinkansen` is awake')

module.exports = component
