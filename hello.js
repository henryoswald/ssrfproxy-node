const SsrfProxyApi = require("./dist/index");

const apiInstance = new SsrfProxyApi({
  apiKey: "ssrf_pB4Xh2Lm_q43tCBiI2iDeGHhBiByEUzF6",
});

apiInstance
  .proxy({
    url: "http://example.com/elsewhere",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
