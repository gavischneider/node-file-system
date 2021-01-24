const fs = require("fs");

// Load a JSON file
function loadJson(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : '""'
  );
}

// Save a JSON file
function saveJson(filename = "", json = '""') {
  return fs.writeFileSync(filename, JSON.stringify(json));
}

const json = loadJson("feeds.json");
json.push({
  name: "Fake name",
  url: "fakeurl",
  image: "fakeimage",
});
console.log(json);
console.log(`JSON length: ${json.length}`);

saveJson("feeds.json", json);
