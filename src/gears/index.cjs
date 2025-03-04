require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/gears')

log('`shinkansen` is awake')

const {
  default: Gears // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Gears
