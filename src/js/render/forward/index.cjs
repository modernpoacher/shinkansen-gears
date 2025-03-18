require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/render/forward')

log('`shinkansen` is awake')

const {
  default: renderForward
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = renderForward
