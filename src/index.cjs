require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

const Gears = require('./gears/index.cjs')
const Reverse = require('./gears/reverse/index.cjs')
const Forward = require('./gears/forward/index.cjs')
const renderReverse = require('./render/reverse/index.cjs')
const renderForward = require('./render/forward/index.cjs')

module.exports.Gears = Gears
module.exports.Reverse = Reverse
module.exports.Forward = Forward
module.exports.renderReverse = renderReverse
module.exports.renderForward = renderForward
