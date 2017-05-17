const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.src('./src/**/*.js')
.pipe(uglify())
.pipe(gulp.dest('.dist/js'));