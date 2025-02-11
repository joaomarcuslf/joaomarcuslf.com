import gulp, {
  series,
  parallel
} from 'gulp';
import gulpImagemin from 'gulp-imagemin';
import gulpWebp from 'gulp-webp';
import gulpUglify from 'gulp-uglify';
import gulpImageResize from 'gulp-image-resize';

import del from 'del';

import {
  exec
} from 'child_process';

const IMAGES_PATH = "./assets/images"
const JAVASCRIPT_PATH = "./assets/js"
const DIST_PATH = "dist"

export const clean = () => {
  return del([DIST_PATH]);
}

export const webp = () => {
  return gulp.src(`${IMAGES_PATH}/**/*.{png,jpg,jpeg}`)
    .pipe(gulpWebp({
      quality: 90
    }))
    .pipe(gulp.dest(`${DIST_PATH}/images`));
}

export const images = () => {
  return gulp.src(`${IMAGES_PATH}/**/*`)
    .pipe(gulpImagemin([
      gulpImagemin.gifsicle({
        interlaced: true
      }),
      gulpImagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      gulpImagemin.optipng({
        optimizationLevel: 5
      }),
      gulpImagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest(`${DIST_PATH}/images`))
}

export const thumbnails = parallel(
  function smallThumb() {
    return (gulp.src(`${IMAGES_PATH}/posts/**/*.webp`)
      .pipe(gulpImageResize({
        width: 538,
        cover: true
      }))
      .pipe(gulp.dest('assets/images/thumbnails/small/posts')))
  },

  function mediumThumb() {
    return (gulp.src(`${IMAGES_PATH}/posts/**/*.webp`)
      .pipe(gulpImageResize({
        width: 1076,
        cover: true
      }))
      .pipe(gulp.dest('assets/images/thumbnails/medium/posts')))
  },
)

export const js = () => {
  return gulp.src(`${JAVASCRIPT_PATH}/**/*`)
    .pipe(gulpUglify())
    .pipe(gulp.dest(`${DIST_PATH}/js`));
}

export const addTags = (cb) => {
  return exec('node run/add-preload-files', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

export const move = (path, target) => function _move() {
  return gulp.src(path)
    .pipe(gulp.dest(target))
}

export const buildWebp = series(
  webp,
  thumbnails,
  move('./dist/images/**/*.webp', 'assets/images'),
)

export default series(
  clean,
  parallel(
    webp,
    images,
    js,
  ),
  thumbnails,
  move('./dist/images/**/*', 'assets/images'),
  move('./dist/js/**/*', 'assets/js'),
  addTags,
)
