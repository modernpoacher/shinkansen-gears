import path from 'path'
import gulp from 'gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from 'build/paths'

import handleError from 'build/gulp/handle-error'

import cssFromSass from './css-from-sass'

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)
const buildModulePath = path.relative(currentDir, modulePath)

export function cssClean () {
  return (
    gulp.src(path.join(buildTargetPath, 'stylesheets/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const css = gulp.series(cssFromSass)

export function cssWatch () {
  return (
    gulp.watch(
      [
        path.join(buildSourcePath, 'sass/**/*.*'),
        path.join(buildSourcePath, 'fonts/**/*.*'),
        path.join(buildSourcePath, 'icons/**/*.*'),
        path.join(buildModulePath, '@modernpoacher/design-system/src/**/*.*')
      ],
      {
        name: 'css-watch',
        cwd: currentDir
      },
      gulp.series(cssClean, css)
    )
      .on('error', handleError)
  )
}
