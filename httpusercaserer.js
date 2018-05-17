const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const fileLocation = process.argv[3];

const handleRequest = (req, res) => {
  const {method} = req;
  if (method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.writeHead(405);
    res.end();
  }
};

const server = http.createServer(handleRequest);
server.listen(Number(process.argv[2]), () => console.log('Listening at port ', process.argv[2]));
