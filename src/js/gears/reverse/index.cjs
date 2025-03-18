require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/gears/reverse')

log('`shinkansen` is awake')

const {
  default: Reverse
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Reverse
