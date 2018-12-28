"use strict";

var gulp   = require('gulp'),
    config = require('../config').copy;

        
gulp.task('icons', function() {
    return gulp.src('./node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('iconsBootstrap', function() {
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**.*')
        .pipe(gulp.dest('./public/fonts/bootstrap'));
});

gulp.task('copy', ['icons', 'iconsBootstrap'], function() {

  return(
      gulp.src(config.from, { base: config.base })
          .pipe(gulp.dest(config.to))
  );

});
