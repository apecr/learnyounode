const moduleLs = require('./module');

const dirName = process.argv[2];
const extension = process.argv[3];

moduleLs(dirName, extension, (error, listFiles) => {
  if (error) {
    console.log(error);
  }
  listFiles.map(file => console.log(file));
});