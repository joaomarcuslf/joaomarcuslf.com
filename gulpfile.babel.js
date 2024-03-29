import gulp, {
  series,
  parallel
} from "gulp";
import gulpImagemin from "gulp-imagemin";
import gulpWebp from "gulp-webp";
import gulpUglify from "gulp-uglify";
import gulpImageResize from "gulp-image-resize";
import gulpPurgecss from "gulp-purgecss";
import gulpBabel from "gulp-babel";

import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";

import del from "del";

import {
  exec
} from "child_process";

const IMAGES_PATH = "./assets/images";
const JAVASCRIPT_PATH = "./assets/js";
const DIST_PATH = "dist";

const SITE_PATH = "_site";

export const clean = () => {
  return del([DIST_PATH]);
};

export const webp = () => {
  return gulp
    .src(`${IMAGES_PATH}/**/*.{png,jpg,jpeg}`)
    .pipe(
      gulpWebp({
        quality: 90,
      })
    )
    .pipe(gulp.dest(`${DIST_PATH}/images`));
};

export const images = () => {
  return gulp
    .src(`${IMAGES_PATH}/**/*`)
    .pipe(
      gulpImagemin([
        imageminPngquant({
          speed: 1,
          quality: [0.95, 1],
        }),
        imageminZopfli({
          more: true,
        }),
        imageminGiflossy({
          optimizationLevel: 3,
          optimize: 3,
          lossy: 2,
        }),
        gulpImagemin.svgo({
          plugins: [{
            removeViewBox: false,
          }, ],
        }),
        gulpImagemin.mozjpeg({
          progressive: true,
        }),
        imageminMozjpeg({
          quality: 90,
        }),
      ])
    )
    .pipe(gulp.dest(`${DIST_PATH}/images`));
};

export const thumbnails = parallel(
  function smallThumb() {
    return gulp
      .src(`${IMAGES_PATH}/posts/**/*.webp`)
      .pipe(
        gulpImageResize({
          width: 538,
          cover: true,
        })
      )
      .pipe(gulp.dest("assets/images/thumbnails/small/posts"));
  },

  function mediumThumb() {
    return gulp
      .src(`${IMAGES_PATH}/posts/**/*.webp`)
      .pipe(
        gulpImageResize({
          width: 1076,
          cover: true,
        })
      )
      .pipe(gulp.dest("assets/images/thumbnails/medium/posts"));
  }
);

export const js = () => {
  return gulp
    .src(`${JAVASCRIPT_PATH}/**/*`)
    .pipe(gulpUglify())
    .pipe(gulp.dest(`${DIST_PATH}/js`));
};

export const addTags = (cb) => {
  return exec("node run/add-preload-files", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};

export const shortUrl = (cb) => {
  return exec(
    "node run/generate-url-shortener",
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
};

export const move = (path, target) =>
  function _move() {
    return gulp.src(path).pipe(gulp.dest(target));
  };

export const buildWebp = series(
  clean,
  thumbnails,
  webp,
  move("./dist/images/**/*.webp", "assets/images")
);

export const purgecss = () => {
  return gulp
    .src(["_site/**/*.css", '!_site/**/hljs.css'])
    .pipe(
      gulpPurgecss({
        content: ["_site/**/*.html", "_site/**/*.js"],
      })
    )
    .pipe(gulp.dest("_site"));
};

export const vendorsJs = () => {
  return gulp
    .src(`${JAVASCRIPT_PATH}/vendors/*`)
    .pipe(gulpBabel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulpUglify())
    .pipe(gulp.dest(`${JAVASCRIPT_PATH}/vendors`));
};

export const watchSite = () => {
  // Purgecss
  gulp.watch([`./assets/css/*.scss`, `./_sass/**/*.scss`], purgecss)

  // Webp
  gulp.watch([`./assets/images/*.{png,jpg,jpeg}`, `./assets/images/companies/*.{png,jpg,jpeg}`], () => gulp
    .src(`${IMAGES_PATH}/**/*.{png,jpg,jpeg}`)
    .pipe(
      gulpWebp({
        quality: 90,
      })
    )
    .pipe(gulp.dest(`${SITE_PATH}/assets/images`)))

  // Thumbnails
  gulp.watch(`./assets/images/posts/**/*.{png,jpg,jpeg}`, () => parallel(
    function smallThumb() {
      return gulp
        .src(`${IMAGES_PATH}/posts/**/*.webp`)
        .pipe(
          gulpImageResize({
            width: 538,
            cover: true,
          })
        )
        .pipe(gulp.dest(`${SITE_PATH}/assets/images/thumbnails/small/posts`));
    },

    function mediumThumb() {
      return gulp
        .src(`${IMAGES_PATH}/posts/**/*.webp`)
        .pipe(
          gulpImageResize({
            width: 1076,
            cover: true,
          })
        )
        .pipe(gulp.dest(`${SITE_PATH}/assets/images/thumbnails/medium/posts`));
    }
  ))
};

export default series(
  clean,
  vendorsJs,
  parallel(images, js),
  webp,
  thumbnails,
  move("./dist/images/**/*", "assets/images"),
  move("./dist/js/**/*", "assets/js"),
  addTags
);
