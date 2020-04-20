const https = require("https");
const API_BASE = "https://rickandmortyapi.com/api/";

function APIRequest(url, callback) {
  https.get(url, res => {
    res.setEncoding("utf8");
    if (res.statusCode === 200) {
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        callback(null, JSON.parse(body));
      });
    } else {
      const error = new Error(
        `REQUEST ERROR ON ${url}. Status ${res.statusCode}`
      );
      callback(error, null);
    }
  });
}

function test() {
  console.log("test");
}
