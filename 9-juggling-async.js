const https = require("http");
const urls = process.argv.slice(2);
const httpRequest = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let results = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        results += chunk;
      });
      res.on("end", () => {
        resolve(results);
      });
      res.on("error", (err) => {
        reject(err);
      });
    });
  });
};

Promise.allSettled(urls.map((url) => httpRequest(url))).then((results) =>
  results.forEach((result) => console.log(result.value))
);
