var express = require("express");
var app = express();
var lineReader = require("reverse-line-reader");

var bodyParser = require("body-parser");

// After you declare "app"
// app.use(session({ secret: 'melody hensley is my spirit animal' }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
global.__basedir = __dirname;

const fs = require("fs");
const await = require("await");
 
let datafromfile = new Array();
async function ReadFile() {
  try {
    const data = await fs.readFileSync("Demo.txt", "utf8");
    data
      .toString()
      .split(/\r\n/)
      .forEach(function (line, lineCount) {
        datafromfile.push(line);
      });

    return datafromfile;
  } catch (e) {
    console.log(e);
  }
}
async function sort(datafromfile) {
  return datafromfile.sort();
}
async function writeFile(datafromfile) {
  try {
    let text = datafromfile.join("\n");

    return fs.writeFileSync("modified.txt", text, "utf8");
  } catch (e) {}
}

 

let server = app.listen(process.env.PORT || 3000, async function () {
 
  await ReadFile();
  await sort(datafromfile);
  await writeFile(datafromfile);
 
  console.log("serveur Back-end run");
});
