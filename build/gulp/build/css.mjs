import debug from 'debug'

import path from 'path'
import gulp from 'gulp'
import vinylPaths from 'vinyl-paths'
import { deleteAsync as del } from 'del'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from '#build/gulp/paths'

import handleWatchError from '#build/gulp/handle-watch-error'

import cssFromSass from '#build/gulp/build/css-from-sass'

const log = debug('shinkansen-gears:build:gulp:build')

const SOURCE_PATH = path.relative(currentDir, sourcePath)
const TARGET_PATH = path.relative(currentDir, targetPath)
const MODULE_PATH = path.relative(currentDir, modulePath)

log('`shinkansen-gears:build:gulp:build` is awake')

export function cleanCss () {
  log('cleanCss')

  return (
    gulp.src([path.join(TARGET_PATH, 'css/*.css'), path.join(TARGET_PATH, 'css/*.map')], { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const css = gulp.series(cssFromSass)

export function watchCss () {
  log('watchCss')

  return (
    gulp.watch(
      [
        path.join(SOURCE_PATH, 'sass/**/*.*'),
        path.join(SOURCE_PATH, 'fonts/**/*.*'),
        path.join(SOURCE_PATH, 'icons/**/*.*'),
        path.join(MODULE_PATH, '@modernpoacher/design-system/src/**/*.*')
      ],
      {
        name: 'css-watch',
        cwd: currentDir
      },
      gulp.series(cleanCss, css)
    ).on('error', handleWatchError)
  )
}
