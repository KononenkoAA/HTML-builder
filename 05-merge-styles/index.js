const fs = require("fs");
const path = require("path");

const stylesPath = path.join(__dirname, "styles");
const bundlePath = path.join(__dirname, "project-dist", "bundle.css");

let writeableStream = fs.createWriteStream(bundlePath);

fs.readdir(stylesPath, (err, data) => {
  data.forEach((file) => {
    let readableStream = fs.createReadStream(`${stylesPath}/${file}`);

    let ext = path.extname(file);
    if (ext === ".css") {
      readableStream.pipe(writeableStream);
    }
  });
});
