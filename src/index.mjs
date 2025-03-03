import debug from 'debug'

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

export {
  Gears,
  renderReverse,
  renderForward
} from './index.cjs'
