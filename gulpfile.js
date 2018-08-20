"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function() {
  gulp.src("./dev/sass/**/*.scss")
    .pipe(sass()
    .on("error", sass.logError)
  )
    .pipe(gulp.dest("./docs/css"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("serv", function() {
  browserSync.init({
    server: {
      baseDir: "./docs"
    },
    notify: false
  });
  browserSync.watch("./docs", browserSync.reload);
});

// gulp.task('watch', function() {
//   gulp.watch('./dev/sass/**/*.scss', gulp.series('sass'))
// });

// gulp.task('default', gulp.series(
//   gulp.parallel('sass'),
//   gulp.parallel('watch', 'serv')
// ));

gulp.task('default', ['sass', 'serv'], function() {
  gulp.watch('./dev/sass/**/*.scss', ['sass']);
});