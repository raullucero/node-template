const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('./public/css/styles.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', function () {
  gulp.watch('./public/css/styles.scss', ['sass']);
});

gulp.task('dev', function (cb) {
  let started = false;

  nodemon({
    script: './index.js',
    ext: 'html js',
    ignore: ['gulpfile.js', 'node_modules/'],
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if (/^Express server listening on port/.test(chunk)) {}
    });

    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  }).on('restart', function onRestart() {
    // reload connected browsers after a slight delay
    browserSync.reload({
      stream: false
    });
  });

  browserSync({
    files: ["public/**/*.*"],
    proxy: "localhost:3000", // local node app address
    port: 4000, // use *different* port than above
    notify: true,
    reloadDelay: 1000,
  });

});

gulp.task('default', [
  'dev',
  'sass',
  'watch'
]);
