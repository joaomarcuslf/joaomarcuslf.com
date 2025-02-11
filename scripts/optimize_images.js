const compress_images = require('compress-images');
const fs = require('fs');

console.log("OPTMIZE_IMAGE: Starting process");

fs.mkdirSync("tmp")

console.log("OPTMIZE_IMAGE: Created tmp");

fs.renameSync("images", "tmp/images", {recursive: true});

console.log("OPTMIZE_IMAGE: Moved images to tmp");

console.log("OPTMIZE_IMAGE: Starting compress");

compress_images(
  "tmp/images/**/*",
  "images/",
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function () {}
);
