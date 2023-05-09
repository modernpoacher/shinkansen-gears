import debug from 'debug'

/**
  * @typedef {import('shinkansen-gears').Gears} Gears
 */

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

export { default as Gears } from './gears/index.cjs'
