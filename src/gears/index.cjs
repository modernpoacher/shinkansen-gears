require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/gears')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
