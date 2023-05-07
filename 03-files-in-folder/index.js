const fs = require("fs");
const path = require("path");

const textFilePath = path.join(__dirname, "secret-folder");

fs.readdir(textFilePath, (err, data) => {
  data.forEach((file) => {
    fs.stat(`${textFilePath}/${file}`, (error, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        let sizeFile = stats.size;
        console.log(
          `${file.substr(0, file.length - path.extname(file).length)} - ${path
            .extname(file)
            .slice(1)} - ${sizeFile}B`
        );
      }
    });
  });
});
