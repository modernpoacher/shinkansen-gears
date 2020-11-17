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
} from 'build/gulp/paths'

import handleError from 'build/gulp/handle-error'

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)
const buildModulePath = path.relative(currentDir, modulePath)

export function cleanIcons () {
  return (
    gulp.src(path.join(buildTargetPath, 'icons/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function icons () {
  return (
    gulp.src(path.join(buildSourcePath, 'icons/**/*.*'))
      .pipe(gulp.dest(path.join(buildTargetPath, 'icons')))
      .pipe(debug({ title: 'Icons' }))
  )
}

export function watchIcons () {
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
      gulp.series(cleanIcons, icons)
    ).on('error', handleError)
  )
}
