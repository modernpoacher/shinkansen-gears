import debug from 'debug'

import {
  relative
} from 'path'

import {
  currentDir
} from '#build/gulp/paths'

const log = debug('shinkansen-gears/handle-watch-error')

log('`shinkansen` is awake')

export function handleWatchError ({
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

export default handleWatchError
