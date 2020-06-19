require('@babel/register')
require('regenerator-runtime/runtime')

const gulp = require('gulp')

const {
  fontsClean: buildFontsClean,
  fonts: buildFonts,
  fontsWatch: buildFontsWatch,
  iconsClean: buildImagesClean,
  icons: buildImages,
  iconsWatch: buildImagesWatch,
  cssClean: buildCssClean,
  css: buildCss,
  cssWatch: buildCssWatch
} = require('./build/gulp/build')

const {
  transform,
  transformWatch
} = require('./build/gulp/transform')

gulp
  .task('build:fonts:clean', buildFontsClean)

gulp
  .task('build:fonts', gulp.series('build:fonts:clean', buildFonts))

gulp
  .task('build:fonts:watch', gulp.series('build:fonts', buildFontsWatch))

gulp
  .task('build:icons:clean', buildImagesClean)

gulp
  .task('build:icons', gulp.series('build:icons:clean', buildImages))

gulp
  .task('build:icons:watch', gulp.series('build:icons', buildImagesWatch))

gulp
  .task('build:css:clean', buildCssClean)

gulp
  .task('build:css', gulp.series('build:css:clean', buildCss))

gulp
  .task('build:css:watch', gulp.series('build:css', buildCssWatch))

gulp
  .task('build:clean', gulp.series('build:fonts:clean', 'build:icons:clean', 'build:css:clean'))

gulp
  .task('build', gulp.series('build:fonts', 'build:icons', 'build:css'))

gulp
  .task('build:watch', gulp.parallel('build:fonts:watch', 'build:icons:watch', 'build:css:watch'))

gulp
  .task('transform', transform)

gulp
  .task('transform:watch', transformWatch)

gulp
  .task('default', gulp.series('build', 'transform'))
