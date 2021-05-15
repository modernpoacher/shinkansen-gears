require('@babel/register')
require('regenerator-runtime/runtime')

const gulp = require('gulp')

const {
  cleanFonts,
  fonts: buildFonts,
  watchFonts,
  cleanIcons,
  icons: buildIcons,
  watchIcons,
  cleanCss,
  css: buildCss,
  watchCss
} = require('./build/gulp/build')

const {
  transformClean,
  transform,
  transformWatch
} = require('./build/gulp/transform')

gulp
  .task('clean:fonts', cleanFonts)

gulp
  .task('build:fonts', gulp.series('clean:fonts', buildFonts))

gulp
  .task('watch:fonts', gulp.series('build:fonts', watchFonts))

gulp
  .task('clean:icons', cleanIcons)

gulp
  .task('build:icons', gulp.series('clean:icons', buildIcons))

gulp
  .task('watch:icons', gulp.series('build:icons', watchIcons))

gulp
  .task('clean:css', cleanCss)

gulp
  .task('build:css', gulp.series('clean:css', buildCss))

gulp
  .task('watch:css', gulp.series('build:css', watchCss))

gulp
  .task('clean', gulp.series('clean:fonts', 'clean:icons', 'clean:css'))

gulp
  .task('build', gulp.series('build:fonts', 'build:icons', 'build:css'))

gulp
  .task('watch', gulp.parallel('watch:fonts', 'watch:icons', 'watch:css'))

gulp
  .task('transform', transform)

gulp
  .task('build:clean', gulp.series('clean:fonts', 'clean:icons', 'clean:css'))

gulp
  .task('build:watch', gulp.series('watch:fonts', 'watch:icons', 'watch:css'))

gulp
  .task('transform:clean', transformClean)

gulp
  .task('transform:watch', transformWatch)

gulp
  .task('default', gulp.series('build', 'transform'))
