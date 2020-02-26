import gulp from 'gulp'
import revRewrite from 'gulp-rev-rewrite'
import config from '../config'
import path from 'path'

const revUpdateHTMLTask = () => {
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)
  var manifest = gulp.src(path.join(finalPath, 'manifest.json'))
  var srcPath = global.production ? path.join('.', config.root.dist, '*.html') : './*.html'
  var destPath = global.production ? path.join(config.root.dist) : './'

  return gulp.src(srcPath)
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest(destPath))
}

gulp.task('revUpdateHTML', revUpdateHTMLTask)
module.exports = revUpdateHTMLTask
