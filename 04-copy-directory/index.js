const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files-copy");

fs.rm(destPath, (err) => {});

fs.readdir(srcPath, (error, data) => {
  fs.mkdir(destPath, (err) => {});

  data.forEach((file) => {
    fs.readFile(`${srcPath}/${file}`, "utf8", (err, dataF) => {
      fs.writeFile(`${destPath}/${file}`, dataF, () => {});
    });
  });
});
