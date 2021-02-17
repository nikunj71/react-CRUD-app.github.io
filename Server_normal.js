const http = require("http");
const fs = require("fs");
// const { url } = require("inspector");
const HTML = fs.readFileSync("./test.html");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(HTML);
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        const json = JSON.stringify({
            name: "nikunj",
            fullname: ["dhaduk", "nikunj"],
        });
        res.end(json);
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(3010, "127.0.0.1");