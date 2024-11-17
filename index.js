const http = require("http");
const fs = require('fs');

const server = http.createServer();
server
  .on("request", (req, res) => {
    if ((req.url === "/" && req.method === "GET")) {
      res.end("Welcome");
    }
    if (req.url==='/read-file' && req.method ==='GET'){
        const readStream = fs.createReadStream(process.cwd()+'/lorem.txt')
        readStream.on('data', (buffer)=>{
            res.write(buffer);
        })
    }
    console.log(req);
  })
  .listen(5000, () => {
    console.log("Server running at http://localhost:5000/");
  });
