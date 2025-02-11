// var fs = require('fs');
// var path = require('path');

// var walk = function(dir, done) {
//   var results = [];
//   fs.readdir(dir, function(err, list) {
//     if (err) return done(err);
//     var pending = list.length;
//     if (!pending) return done(null, results);
//     list.forEach(function(file) {
//       file = path.resolve(dir, file);
//       fs.stat(file, function(err, stat) {
//         if (stat && stat.isDirectory()) {
//           walk(file, function(err, res) {
//             results = results.concat(res);
//             if (!--pending) done(null, results);
//           });
//         } else {
//           results.push(file);
//           if (!--pending) done(null, results);
//         }
//       });
//     });
//   });
// };

// walk(
//   "./assets/images",
//   function(err, results) {
//     let resultsToMap = results.filter(l => !l.includes("mentorship/") && !l.includes("posts/") && !l.includes(".DS_Store") && l.includes(".webp"))

//     fs.writeFile(
//       '_includes/preload.html',
//       resultsToMap.map(filePath => {
//         const filename = filePath.split("images/")[1]
//         return `<link rel="prefetch" as="image"  href="/assets/images/${filename}">`
//       }).join("\n"),
//       function (err) {
//         if (err) return console.log(err);
//         console.log('Add preload tags');
//     });

//     fs.writeFile(
//       '_sass/settings/preload.scss',
//       resultsToMap.map((filePath, index) => {
//         const filename = filePath.split("images/")[1]
//         return `#preload-${index} { background: url("/assets/images/${filename}"); display: none; }`
//       }).join("\n"),
//       function (err) {
//         if (err) return console.log(err);
//         console.log('Add preload to css');
//     });
//   }
// )
