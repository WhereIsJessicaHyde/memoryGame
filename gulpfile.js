var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoPrefixer = require ('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./sass/main.sass')
    //.pipe(autoPrefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('watch-sass', function() {
   gulp.watch("./sass/**/*.sass", ['sass']);
  });

//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('default', ['watch-sass']);
