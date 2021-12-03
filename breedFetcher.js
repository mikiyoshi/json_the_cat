const request = require('request');
const breed = process.argv.slice(2);

const domain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
// const domain = 'https://api.thecatapi.ds/search?q=' + breed;
// request(domain, function (error, response, body) {
//   // console.log(request);
//   // console.log(domain);
//   // console.log(error);
//   // if (error) {
//   //   console.log('true'); unURL
//   // } else {
//   //   console.log('false'); URL
//   // }
//   // console.log(response.body); aaa [] unURL []
//   console.log(body); // aaa [] unURL undefined
// });

request(domain, function (error, response, body) {
  //   // console.log(request);
  //   // console.log(domain);
  //   // console.log(error);
  //   // console.log(response);
  //   // console.log(body);
  //   // console.log(data);
  if (error) {
    console.log('Request Failed');
    return;
    // unURL;
  }
  const data = JSON.parse(body);
  // console.log('Get URL');
  // URL;

  //   // console.log(domain);
  //   // console.log(error);
  //   // console.log(response.body);
  //   // console.log(body);
  //   // console.log(data);
  // console.log(typeof data);
  if (data[0]) {
    console.log(data[0].description);
    return;
  }
  console.log('Breed Not Found');
  //   if (error) {
  //     console.log(responce);
  //   }
  // }
  //   // console.log(typeof data);
});
