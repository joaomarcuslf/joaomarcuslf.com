const compress_images = require('compress-images');
const fs = require('fs');

fs.rmdirSync("_site/images/", { recursive: true });

compress_images(
  "images/**/*.{jpg,JPG,jpeg,JPEG}",
  "_site/images/",
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function () {}
);
