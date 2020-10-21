import debug from 'debug'

import path from 'path'
import gulp from 'gulp'

import {
  currentDir,
  sourcePath
} from 'build/paths'

import handleWatchError from 'build/gulp/handle-watch-error'

import {
  readFile,
  writeFile
} from 'fs/promises'

const log = debug('shinkansen-gears:transform')

const STYLESHEET = /(<style type="text\/css">)[ -~\w\d"'+-:;,#%{}/*\n\s✓•]*(<\/style>)/gm

const buildSourcePath = path.relative(currentDir, sourcePath)

export async function transform () {
  log('transform')

  const css = await readFile('.storybook/preview-head.css', 'utf8')

  return (
    writeFile('.storybook/preview-head.html', (
      await readFile('.storybook/preview-head.html', 'utf8')
    ).replace(STYLESHEET, `$1\n${css.trim()}\n$2`), 'utf8')
  )
}

export function transformWatch () {
  log('transformWatch')

  return (
    gulp.watch(
      [
        path.join(buildSourcePath, '**/*.css')
      ],
      {
        name: 'css-watch',
        cwd: currentDir
      },
      transform
    )
      .on('error', handleWatchError)
  )
}

export default transform
