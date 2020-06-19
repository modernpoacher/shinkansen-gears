import path from 'path'
import gulp from 'gulp'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from 'build/paths'

import handleWatchError from 'build/gulp/handle-watch-error'

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)
const buildModulePath = path.relative(currentDir, modulePath)

export function iconsClean () {
  return (
    gulp.src(path.join(buildTargetPath, 'icons/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function icons () {
  return (
    gulp.src([path.join(buildSourcePath, 'icons/**/*.*')])
      .pipe(gulp.dest(path.join(buildTargetPath, 'icons')))
      .pipe(debug({ title: 'Icons' }))
  )
}

export function iconsWatch () {
  return (
    gulp.watch(
      [
        path.join(buildSourcePath, 'icons/**/*.*'),
        path.join(buildModulePath, '@modernpoacher/design-system/src/icons/**/*.*')
      ],
      {
        name: 'icons-watch',
        cwd: currentDir
      },
      gulp.series(iconsClean, icons)
    )
      .on('error', handleWatchError)
  )
}
