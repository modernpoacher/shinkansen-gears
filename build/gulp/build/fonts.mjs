import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import debug from '@sequencemedia/gulp-debug'
import vinylPaths from 'vinyl-paths'
import { deleteAsync as del } from 'del'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from '#build/gulp/paths'

import handleWatchError from '#build/gulp/handle-watch-error'

const SOURCE_PATH = path.relative(currentDir, sourcePath)
const TARGET_PATH = path.relative(currentDir, targetPath)
const MODULE_PATH = path.relative(currentDir, modulePath)

export function cleanFonts () {
  return (
    gulp.src(path.join(TARGET_PATH, 'fonts/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function fonts () {
  return (
    gulp.src(path.join(SOURCE_PATH, 'fonts/**/*.*'))
      .pipe(gulp.dest(path.join(TARGET_PATH, 'fonts')))
      .pipe(debug({ title: 'Fonts' }))
  )
}

export function watchFonts () {
  return (
    gulp.watch(
      [
        path.join(SOURCE_PATH, 'fonts/**/*.*'),
        path.join(MODULE_PATH, '@modernpoacher/design-system/src/fonts/**/*.*')
      ],
      {
        name: 'fonts-watch',
        cwd: currentDir
      },
      gulp.series(cleanFonts, fonts)
    ).on('error', handleWatchError)
  )
}
