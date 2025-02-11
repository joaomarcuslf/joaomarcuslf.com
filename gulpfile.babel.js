import gulp, { series, parallel } from 'gulp';
import gulpImagemin from 'gulp-imagemin';
import gulpWebp from 'gulp-webp';
import gulpUglifycss from 'gulp-uglifycss';
import gulpUglify from 'gulp-uglify';
import gulpRun from 'gulp-run';


import {exec} from 'child_process';

const IMAGES_PATH = "./images"
const JAVASCRIPT_PATH = "./js"
const CSS_PATH = "./css"
const DIST_PATH = "dist"

export const webp = () => {
  return gulp.src(`${IMAGES_PATH}/**/*.{png,jpg,jpeg}`)
    .pipe(gulpWebp({quality: 90}))
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

export const js = () => {
  return gulp.src(`${JAVASCRIPT_PATH}/**/*`)
    .pipe(gulpUglify())
    .pipe(gulp.dest(`${DIST_PATH}/js`));
}

export const css = () => {
  return gulp.src(`${CSS_PATH}/**/*`)
    .pipe(gulpUglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(`${DIST_PATH}/css`));
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
  move('./dist/images/**/*.webp', 'images'),
)

export default series(
  parallel(
    webp,
    images,
    js,
    css,
  ),
  move('./dist/images/**/*', 'images'),
  move('./dist/js/**/*', 'js'),
  move('./dist/css/**/*', 'css'),
  addTags,
)
