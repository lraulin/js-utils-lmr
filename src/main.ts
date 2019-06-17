const fs = require("fs");

/** Insert a space before every capital letter preceded by a non-whitespace
 * character. */
module.exports.camelSpace = (text: string) =>
  text.replace(/([\S])([A-Z])/g, "$1 $2");

// Capitalize first character in string.
module.exports.capitalize = (word: string) =>
  word[0].toUpperCase() + word.slice(1);

// Changes camelCase text to Title Case.
module.exports.camelToTitle = (text: string) =>
  module.exports
    .camelSpace(text)
    .split(" ")
    .map((word: any) => module.exports.capitalize(word))
    .join(" ");

/** Take date object and return string in format MM/DD/YYYY */
module.exports.formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${month}/${day}/${year}`;
};

module.exports.streamWriteToFile = (text: string, file: any) => {
  const stream = fs.createWriteStream(file, { flags: "a" });
  stream.write(text + "\n");
  stream.end();
};

// Return a Promise that resolves to a string containing contents of file.
module.exports.readFile = (path: string, opts = "utf8") =>
  new Promise<any>((res, rej) => {
    fs.readFile(path, opts, (err: Error, text: string) => {
      if (err) rej(err);
      else res(text);
    });
  });

// Return a JSON file as an object.
module.exports.readJsonFile = async (path: any) =>
  JSON.parse(await this.readFile(path));

const test = async () => {
  const text = await module.exports.readFile("./text.txt");
  console.log(text);
};

test();
