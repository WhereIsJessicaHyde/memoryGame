var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoPrefixer = require ('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('server', function() {
  browserSync.init( {
    server: {
      baseDir: "./"
    }
  });
   gulp.watch("sass/style.scss", ['sass']).on('change', reload);
   gulp.watch("./css/style.css").on('change', reload);
   gulp.watch("./js/main.js").on('change', reload);
   gulp.watch("./js/memory.js").on('change', reload);
   gulp.watch("./index.html").on("change", reload);

});


//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('default', ['server']);
