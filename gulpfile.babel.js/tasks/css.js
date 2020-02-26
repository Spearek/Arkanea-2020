import gulp from 'gulp'
import postcss from 'gulp-postcss'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import gulpif from 'gulp-if'
import cssnano from 'cssnano'
import browserSync from 'browser-sync'
import path from 'path'
import handleErrors from '../lib/handle-errors'
import config from '../config'

const paths = {
  src: path.posix.join(config.root.src, config.tasks.css.src, '/**/main.{' + config.tasks.css.extensions + '}'),
  dest: path.posix.join(config.root.dest, config.tasks.css.dest)
}

const cssTask = () => {
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer())
    .pipe(gulpif(global.production, postcss([
      cssnano()
    ])))
    .pipe(gulp.dest(path.posix.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('css', cssTask)
module.exports = cssTask
