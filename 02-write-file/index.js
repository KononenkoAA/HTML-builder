const fs = require("fs");
const path = require("path");
const { stdout } = require("process");
const process = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const pathText = path.join(__dirname, "text.txt");

fs.writeFile(pathText, "", (err) => {
  if (err) throw err;
});

rl.question("Введите данные: ", (answer) => {
  stdout.write("Введите данные: ");
  fs.appendFile(pathText, answer + "\n", (err) => {
    if (err) throw err;
  });

  rl.on("line", (answer) => {
    if (answer.includes("exit")) process.exit();
    fs.appendFile(pathText, answer + "\n", (err) => {
      if (err) throw err;
    });
    stdout.write("Введите данные: ");
  });

  process.on("exit", () => {
    stdout.write("Прощай :(\n");
  });
});
