require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/gears/forward')

log('`shinkansen` is awake')

const {
  default: Forward
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Forward
