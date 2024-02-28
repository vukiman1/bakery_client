const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buidStyles() {
  return src("./assets/css/App.scss").pipe(sass()).pipe(dest("./assets/css"));
}

function watchTask() {
  watch("./assets/css/App.scss", buidStyles);
}

exports.default = series(buidStyles, watchTask);
