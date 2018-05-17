const fs = require('fs');

const [filePath, ...rest] = process.argv.filter(((element, index) => index === 2));

const content = fs.readFileSync(process.argv[2], 'utf8');
const lines = content.split('\n');
console.log(lines.length - 1);