const SsrfProxyApi = require("./dist/index").SsrfProxyApi;

const apiInstance = new SsrfProxyApi({
  apiKey: "ssrf_pB4Xh2Lm_q43tCBiI2iDeGHhBiByEUzF6",
});

// const apiInstance = new SsrfProxyApi({
//   apiKey: "ssrf_pp2p2cnp_no8c9qZDibEWjEpA1caP3el6",
//   basePath: "http://localhost:4000",
// });

apiInstance
  .proxy({
    // url: "https://ichef.bbci.co.uk/live-experience/cps/240/cpsprodpb/vivo/live/images/2023/6/12/564270eb-cacf-41f8-8efa-60e8666526f0.jpg",
    url: "https://dummyjson.com/products/1",
  })
  .then((response) => {
    console.log(response.headers);
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
