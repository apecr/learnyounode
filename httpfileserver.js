const http = require('http');
const fs = require('fs');

const fileLocation = process.argv[3];

const handleRequest = (req, res) => {
  const stat = fs.statSync(fileLocation);
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': stat.size
  });
  fs.createReadStream(fileLocation).pipe(res);
};

const server = http.createServer(handleRequest);
server.listen(Number(process.argv[2]), () => console.log('Listening at port ', process.argv[2]));
