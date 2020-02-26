import gulp from 'gulp'
import gulpRev from 'gulp-rev'
import gulpRevDel from 'gulp-rev-delete-original'
import path from 'path'
import config from '../config'

const paths = {
  desc: path.posix.join(config.root.dist, config.root.dest)
}

const rev = () => {
  return gulp.src([path.posix.join(paths.desc, '/**/*.+(css|jpg|png|gif|svg)')])
    .pipe(gulpRev())
    .pipe(gulpRevDel())
    .pipe(gulp.dest(paths.desc))
    .pipe(gulpRev.manifest(path.posix.join(paths.desc, 'manifest.json'), {
      merge: true
    }))
    .pipe(gulp.dest('./'))
}

gulp.task('rev', rev)
module.exports = rev
