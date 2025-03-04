import debug from 'debug'

import Gears from './gears/index.cjs'
import Reverse from './gears/reverse/index.cjs'
import Forward from './gears/forward/index.cjs'
import renderReverse from './render/reverse/index.cjs'
import renderForward from './render/forward/index.cjs'

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

export {
  Gears,
  Reverse,
  Forward,
  renderReverse,
  renderForward
}
