import debug from 'debug'

import path from 'path'
import gulp from 'gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from 'build/gulp/paths'

import handleError from 'build/gulp/handle-error'

import cssFromSass from './css-from-sass'

const log = debug('shinkansen-gears:build:gulp:build')

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)
const buildModulePath = path.relative(currentDir, modulePath)

log('`shinkansen-gears:build:gulp:build` is awake')

export function cleanCss () {
  log('cleanCss')

  return (
    gulp.src([path.join(buildTargetPath, 'css/*.css'), path.join(buildTargetPath, 'css/*.map')], { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const css = gulp.series(cssFromSass)

export function watchCss () {
  log('watchCss')

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
      gulp.series(cleanCss, css)
    ).on('error', handleError)
  )
}
