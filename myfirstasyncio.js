const fs = require('fs');

const readFilePromise = (path, encondig) => new Promise((resolve, reject) => {
  fs.readFile(path, encondig, (error, data) => {
    if (error) {
      reject(error);
    }
    resolve(data);
  });
});

const nodefcall = (fn, ...argsAF) => {
  return new Promise((resolve, reject) => {
    fn.apply({}, argsAF.concat((err, ...calbackArgs) => {
      if (err) {
        reject(err);
      } else {
        resolve(...calbackArgs);
      }
    }));
  });
};

const myFirstIo = () => nodefcall(fs.readFile, process.argv[2], 'utf8')
  .then(data => data.split('\n').length - 1)
  .then(console.log);

module.exports = {
  nodefcall
};