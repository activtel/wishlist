"use strict";


var gulp       = require('gulp'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    derequire  = require('gulp-derequire'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    rename     = require('gulp-rename'),
    header     = require('gulp-header'),
    gulpif     = require('gulp-if'),
    notifier   = require('../helpers/notifier'),
    config     = require('../config').scripts;
    
    
gulp.task('icons', function() {
    return gulp.src('./node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});