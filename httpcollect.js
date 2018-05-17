const http = require('http');
const bl = require('bl');

const uri = process.argv[2];

http.get(uri, (response) => {
  response.pipe(bl((err, data) => {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
  response.on('error', console.error);
})
  .on('error', console.error);