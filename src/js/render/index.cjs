require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears/render')

log('`shinkansen` is awake')

const renderReverse = require('./reverse/index.cjs')
const renderForward = require('./forward/index.cjs')

module.exports.renderReverse = renderReverse
module.exports.renderForward = renderForward
