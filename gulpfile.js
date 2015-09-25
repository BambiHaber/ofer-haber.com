var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var less = require('gulp-less');
var notify = require('gulp-notify');
var minifyhtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var child = require('child_process');
var del = require('del');
var livereload = require('gulp-livereload');


var fs = require('fs');
var rmdir = function(directories, callback) {
    if(typeof directories === 'string') {
        directories = [directories];
    }
    var args = directories;
    args.unshift('-rf');
    child.execFile('rm', args, {env:process.env}, function(err, stdout, stderr) {
        callback.apply(this, arguments);
    });
};

/* Delete all files */
gulp.task('clean', function (cb) {
    del(['build']);
    cb();
});

/* Minify html */
gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('*.html')
        .pipe(minifyhtml(opts))
        .pipe(gulp.dest('build/'));
});

/* Render less-css and minify */
gulp.task('styles', function () {
    return gulp.src('src/css/style.less')
        .pipe(less())
        .pipe(minifycss(/*{compatibility: 'ie8'}*/))
        .pipe(gulp.dest('build/assets/css'));
});

/* Scripts.. and minify */
gulp.task('scripts', function () {
    return gulp.src([
        /* Libraries */
        'src/js/lib/vendor/jquery-1.7.2.min.js',
        'src/js/lib/vendor/underscore.js',
        'src/js/lib/vendor/backbone.js',
        'src/js/lib/helpers/stringPrototype.js',
        'src/js/lib/helpers/namespace.js',

        /* Website files */
        'src/js/com/oferHaber/position/Model.js',
        'src/js/com/oferHaber/position/Collection.js',

        'src/js/com/oferHaber/tabs/cv/CvView.js',
        'src/js/com/oferHaber/tabs/aboutMe/AboutMeView.js',

        'src/js/com/oferHaber/PageModel.js',
        'src/js/com/oferHaber/PageView.js',
        'src/js/com/oferHaber/Page.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(notify({message: 'Scripts task complete'}));
});

/* Images optimization (zipping) */
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('build/assets/images'))
        .pipe(notify({message: 'Images task complete'}));
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src([
        'src/fonts/*'])
        .pipe(gulp.dest('build/assets/fonts/'));
});

// Static positions json file
gulp.task('positions', function () {
    return gulp.src([
        'src/positions/*'])
        .pipe(gulp.dest('build/assets/positions/'));
});

/* Delete target */
gulp.task('clean', function (cb) {

    rmdir('build',cb);
});

gulp.task('default', ['clean'], function () {
    gulp.start('scripts', 'html', 'styles', 'fonts', 'images', 'positions');
});

