import debug from 'debug'

import {
  relative
} from 'path'

import {
  currentDir
} from 'build/paths'

const log = debug('shinkansen-gears:handle-error')

log('`handleError` is awake')

export function handleError ({
  code = 'No error code defined',
  message = 'No error message defined',
  filename: f = 'No file name defined',
  path: p = 'No path defined'
} = {}) {
  switch (code) {
    case 'EPERM':
      log(`A watched file or directory has invalid permissions: '${relative(currentDir, f || p)}'`)
      break

    case 'ENOENT':
      log(`A watched file or directory has been deleted: '${relative(currentDir, f || p)}'`)
      break

    default:
      log(`Watch error. ${code}: ${message}.`)
      break
  }
}

export default handleError
