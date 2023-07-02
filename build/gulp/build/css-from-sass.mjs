import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import glob from 'glob-all'
import * as dartSass from 'sass'
import gulpSass from '@sequencemedia/gulp-sass'
import debug from '@sequencemedia/gulp-debug'

import postCss from '@sequencemedia/gulp-postcss'
import atImport from 'postcss-easy-import'
import map from 'postcss-map'
import scss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import nano from 'cssnano'
import cleanCss from '@sequencemedia/gulp-clean-css'
import cssPurge from '@sequencemedia/gulp-css-purge'
import sourcemaps from '@sequencemedia/gulp-sourcemaps'

import {
  currentDir,
  sourcePath,
  targetPath,
  modulePath
} from '#build/gulp/paths'

import handleWatchError from '#build/gulp/handle-watch-error'

const sass = gulpSass(dartSass)

const SOURCE_PATH = path.relative(currentDir, sourcePath)
const TARGET_PATH = path.relative(currentDir, targetPath)
const MODULE_PATH = path.relative(currentDir, modulePath)

function getTransformForSass () {
  return (
    sass({
      outputStyle: 'compressed', // 'nested',
      includePaths: [
        path.join(MODULE_PATH, '@modernpoacher/design-system/src/sass')
      ]
    }).on('error', sass.logError)
  )
}

function getTransformForPostCss () {
  const maps = glob.sync(path.join(MODULE_PATH, '@modernpoacher/design-system/src/tokens/**/*.*'))

  return (
    postCss([
      atImport(),
      map({
        maps
      }),
      autoprefixer(),
      nano()
    ], { syntax: scss })
  )
}

function getTransformForCleanCss () {
  return (
    cleanCss({
      format: 'beautify',
      compatibility: 'ie9',
      specialComments: 0
    })
  )
}

function getTransformForCssPurge () {
  return (
    cssPurge({
      trim: false, // we have chosen to beautify not minify in cleanCSS, so let's not minify here
      trim_last_semicolon: true, // cleanCSS does this for us; cssPurge puts it back (unless we prevent it, here)
      shorten: false, // 'true' kills some inline `<svg />` elements
      format: false,
      verbose: false
    })
  )
}

export default function cssFromSass () {
  return (
    gulp.src([path.join(SOURCE_PATH, 'sass/**/*.*'), `!${path.join(SOURCE_PATH, 'sass/**/_*.*')}`])
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(getTransformForSass())
      .pipe(getTransformForPostCss())
      .pipe(getTransformForCleanCss())
      .pipe(getTransformForCssPurge())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.join(TARGET_PATH, 'css')))
      .pipe(debug({ title: 'CSS' }))
      .on('error', handleWatchError)
  )
}
