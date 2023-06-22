const http = require("http");
const url = process.argv[2];

http.get(url, function (response) {
  let result = "";
  response.setEncoding("utf8");
  response.on("data", function (chunk) {
    result += chunk;
  });
  response.on("end", () => {
  console.log(result.length);
  console.log(result);
});
  
});
