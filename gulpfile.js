const gulp = require("gulp");
const gap = require("gulp-append-prepend");

// Gulp task to prepend license headers to production build files
gulp.task("licenses", async function () {
  // Add license header to all JavaScript chunk files in the production build
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Dashboard React - v1.2.2
=========================================================

* Licensed under MIT
* Permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // Add license header to the main HTML file in the production build
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Dashboard React - v1.2.2
=========================================================

* Licensed under MIT
* Permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // Add license header to all CSS chunk files in the production build
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Dashboard React - v1.2.2
=========================================================

* Licensed under MIT
* Permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  return;
});
