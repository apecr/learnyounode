const http = require('http');
const bl = require('bl');

const uri1 = process.argv[2];
const uri2 = process.argv[3];
const uri3 = process.argv[4];

const httpGetPromise = uri => {
  return new Promise((resolve, reject) => {
    http.get(uri, response => {
      response.pipe(bl((err, data) => {
        resolve(data.toString());
      }));
      response.on('error', reject);
    }).on('error', reject);
  });
};

const getPromises = [httpGetPromise(uri1), httpGetPromise(uri2), httpGetPromise(uri3)];
Promise.all(getPromises).then(responses => responses.map(response => console.log(response)));


// http.get(uri1, (response) => {
//   response.pipe(bl((err, data) => {
//     console.log(data.toString());
//     http.get(uri2, response2 => {
//       response2.pipe(bl((err2, data2) => {
//         console.log(data2.toString());
//         http.get(uri3, response3 => {
//           response3.pipe(bl((err3, data3) => {
//             console.log(data3.toString());
//           }));
//           response3.on('error', console.error);
//         })
//           .on('error', console.error);
//       }));
//       response2.on('error', console.error);
//     })
//       .on('error', console.error);
//   }));
//   response.on('error', console.error);
// })
//   .on('error', console.error);