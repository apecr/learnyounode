const fs = require('fs');
const path = require('path');
const { nodefcall } = require('./myfirstasyncio');

const dirName = process.argv[2];
const extension = `.${process.argv[3]}`;

nodefcall(fs.readdir, dirName)
  .then(listFilesInDir => listFilesInDir.filter(file => path.extname(file) === extension))
  .then(listFiles => listFiles.map(file => console.log(file)));

// fs.readdir(dirName, (error, listFilesInDir) => {
//   Promise.resolve(listFilesInDir.filter(file => path.extname(file) === extension))
//     .then(listFiles => listFiles.map(file => console.log(file)));
// });

