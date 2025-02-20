require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/gears')

const {
  default: component // @ts-ignore
} = require('./index.jsx')

log('`shinkansen` is awake')

module.exports = component
