const http = require('http');
const fs = require('fs');
const url = require('url');

const parseTime = (isoHour) => (
  {
    hour: new Date(isoHour).getHours(),
    minute: new Date(isoHour).getMinutes(),
    second: new Date(isoHour).getSeconds()
  }
);
const unixTime = (isoHour) => (
  {
    unixtime: new Date(isoHour).getTime()
  }
);

const mapping = {
  '/api/parsetime': parseTime,
  '/api/unixtime': unixTime
};

const handleRequest = (req, res) => {
  if (req.method === 'GET') {
    const {pathname, query} = url.parse(req.url, true);
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    const jsonTransformationFunction = mapping[pathname] || unixTime;
    res.end(JSON.stringify(jsonTransformationFunction(query.iso)));
  } else {
    res.writeHead(405);
    res.end();
  }
};

const server = http.createServer(handleRequest);
server.listen(Number(process.argv[2]), () => console.log('Listening at port ', process.argv[2]));
