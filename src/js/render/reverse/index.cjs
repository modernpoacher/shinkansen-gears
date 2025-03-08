require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/render/reverse')

log('`shinkansen` is awake')

const {
  default: renderReverse // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = renderReverse
