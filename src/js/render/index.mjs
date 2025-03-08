import debug from 'debug'

import renderReverse from './reverse/index.cjs'
import renderForward from './forward/index.cjs'

const log = debug('shinkansen-gears/render')

log('`shinkansen` is awake')

export {
  renderReverse,
  renderForward
}
