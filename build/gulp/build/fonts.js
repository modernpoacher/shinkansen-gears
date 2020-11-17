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

export function cleanFonts () {
  return (
    gulp.src(path.join(buildTargetPath, 'fonts/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function fonts () {
  return (
    gulp.src(path.join(buildSourcePath, 'fonts/**/*.*'))
      .pipe(gulp.dest(path.join(buildTargetPath, 'fonts')))
      .pipe(debug({ title: 'Fonts' }))
  )
}

export function watchFonts () {
  return (
    gulp.watch(
      [
        path.join(buildSourcePath, 'fonts/**/*.*'),
        path.join(buildModulePath, '@modernpoacher/design-system/src/fonts/**/*.*')
      ],
      {
        name: 'fonts-watch',
        cwd: currentDir
      },
      gulp.series(cleanFonts, fonts)
    ).on('error', handleError)
  )
}
