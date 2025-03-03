require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

const {
  default: Gears,
  renderReverse,
  renderForward
} = require('./gears/index.cjs')

module.exports.Gears = Gears
module.exports.renderReverse = renderReverse
module.exports.renderForward = renderForward
