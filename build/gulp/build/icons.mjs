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

export function cleanIcons () {
  return (
    gulp.src(path.join(TARGET_PATH, 'icons/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function icons () {
  return (
    gulp.src(path.join(SOURCE_PATH, 'icons/**/*.*'))
      .pipe(gulp.dest(path.join(TARGET_PATH, 'icons')))
      .pipe(debug({ title: 'Icons' }))
  )
}

export function watchIcons () {
  return (
    gulp.watch(
      [
        path.join(SOURCE_PATH, 'icons/**/*.*'),
        path.join(MODULE_PATH, '@modernpoacher/design-system/src/icons/**/*.*')
      ],
      {
        name: 'icons-watch',
        cwd: currentDir
      },
      gulp.series(cleanIcons, icons)
    ).on('error', handleWatchError)
  )
}
