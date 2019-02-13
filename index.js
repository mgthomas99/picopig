const fs = require("fs");
const readline = require("readline-sync");

/**
 * Reads the shortened script from `index.html` and strips the HTML tags,
 * extracting only the Javascript code, and returns it as a string.
 */
function getScript() {
  const content = fs.readFileSync("./index.html", { encoding: "utf-8" });
  return content.substring(
      "<script>".length,
      content.length - "</script>".length
    );
}

global.alert = function (msg) {
  console.log(msg);
};

global.prompt = function (query) {
  return readline.question(`${query} > `);
};

eval(getScript());
