import 'regenerator-runtime/runtime.js'

import gulp from '@sequencemedia/gulp'

import {
  cleanFonts,
  fonts as buildFonts,
  watchFonts,
  cleanIcons,
  icons as buildIcons,
  watchIcons,
  cleanCss,
  css as buildCss,
  watchCss
} from '#build/gulp/build'

import {
  transformClean,
  transform,
  transformWatch
} from '#build/gulp/transform'

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
