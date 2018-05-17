const http = require('http');

const uri = process.argv[2];

http.get(uri, (response) => {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
})
  .on('error', console.error);