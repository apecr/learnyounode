const net = require('net');
const strftime = require('strftime');

const handleRequest = (socket) => {
  socket.end(`${strftime('%F %R')}\n`);
};

const server = net.createServer(handleRequest);
server.listen(+process.argv[2], () => console.log('Listening on port ', +process.argv[2]));