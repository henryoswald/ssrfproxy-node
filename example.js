const { SsrfProxyApi, Configuration } = require("./dist/index");

// const apiInstance = new SsrfProxyApi({
//   apiKey: process.env.ssrf_api_key,
// });

const apiInstance = new SsrfProxyApi({
  apiKey: process.env.ssrf_api_key,
  basePath: "http://localhost:4000",
});

// apiInstance
//   .proxy({
//     // url: "https://ichef.bbci.co.uk/live-experience/cps/240/cpsprodpb/vivo/live/images/2023/6/12/564270eb-cacf-41f8-8efa-60e8666526f0.jpg",
//     url: "https://dummyjson.com/products/1",
//   })
//   .then((response) => {
//     console.log(response.headers);
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
async function hello() {
  const response = await apiInstance.proxy({
    // url: "https://ichef.bbci.co.uk/live-experience/cps/240/cpsprodpb/vivo/live/images/2023/6/12/564270eb-cacf-41f8-8efa-60e8666526f0.jpg",
    url: "https://github-media-downloads.s3.amazonaws.com/GitHub-Logos.zip",
  });

  console.log(response.headers);
  // console.log(response.data);
}
hello();
// .then((response) => {
//   console.log(response.headers);
//   console.log(response.data);
// })
// .catch((error) => {
//   console.error(error);
// });
