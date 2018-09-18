var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoPrefixer = require ('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    //.pipe(autoPrefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('watch-sass', function() {
   gulp.watch("./sass/**/*.sass", ['sass']);
  });

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('stylesheets/style.css').on('change', browserSync.reload);
  gulp.watch('src/memory.js').on('change', browserSync.reload);
  gulp.watch('src/main.js').on('change', browserSync.reload);
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('default', ['server']);
