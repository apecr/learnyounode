const fs = require('fs');
const path = require('path');
const { nodefcall } = require('./myfirstasyncio');

const moduleLs = (dirName, extension, callback) => nodefcall(fs.readdir, dirName)
  .then(listFilesInDir => listFilesInDir.filter(file => path.extname(file) === `.${extension}`))
  .then(listFiles => callback(null, listFiles))
  .catch(error => callback(error));

module.exports = moduleLs;