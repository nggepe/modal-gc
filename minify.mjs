import { minify } from "minify";
import tryToCatch from 'try-to-catch';
import fs from 'fs';
const options = {
  "js": {
    "ecma": 5
  },
  "css": {
    "compatibility": "*"
  },
};

async function init() {
  writeMinify('./src/modal-gc.js', './dist/modal-gc.min.js');
  writeMinify('./src/modal-gc.css', './dist/modal-gc.min.css');
}

async function writeMinify(path, minifypath) {
  const [error, data] = await tryToCatch(minify, path, options);
  if (error) {
    console.log(error);
  }
  else {
    fs.writeFile(minifypath, data, function (err) {
      if (err) console.error(err)
      else console.log("success write" + minifypath + " from " + path);
    })
  }

}

init()