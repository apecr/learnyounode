const numbers = process.argv.filter(((element, index) => index > 1)).map(element => +element);
console.log(numbers.reduce((previous, actual) => previous + actual, 0));