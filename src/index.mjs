/**
 * @typedef {import('shinkansen-gears').Gears} Gears
 */

import debug from 'debug'

const log = debug('shinkansen-gears')

log('`shinkansen` is awake')

export { default as Gears } from './gears/index.cjs'
