"use strict";

var gulp = require('gulp');
var sassGlob = require('gulp-sass-glob');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'safari >= 6', 'ios 6'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        // './node_modules/jquery-mobile/js/jquery.mobile.js',
        './node_modules/jquery-mobile/js/events/orientationchange.js',
        './node_modules/owl.carousel/dist/owl.carousel.js',
        './node_modules/lightgallery/dist/js/lightgallery.js',
        './node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
        './node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl.min.js',
        './node_modules/jquery-unveil/jquery.unveil.js',
        './node_modules/pace-js/pace.js',
        './scripts/**/*.js',
        '!./scripts/map.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./scripts/**/*.js', gulp.series('js'));
});
