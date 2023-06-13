## Overview

Node package for protecting your server from Server Side Request Forgery (SSRF) attacks using [SSRF Proxy](https://ssrfproxy.com). Sign up for a free account to get an API key.

## Install

```
npm i @ssrfproxy/ssrfproxy-node --save
```

## Usage

```
const { SsrfProxyApi } = require('@ssrfproxy/ssrfproxy-node');

const ssrfproxy = new SsrfProxyApi({
  apiKey: API_KEY_HERE,
});

const response = await apiInstance.proxy({
  url: "https://dummyjson.com/products/1",
});

console.log(response.headers);
console.log(response.data);
```

## Options

| Option  | Type    | Description                                                                 | Example                                | Required |
| ------- | ------- | --------------------------------------------------------------------------- | -------------------------------------- | -------- |
| url     | string  | The URL to be accessed by the API.                                          | "http://example.com/"                  | Yes      |
| method  | string  | The HTTP method to be used when accessing the URL. Defaults to "GET".       | "GET"                                  | No       |
| headers | object  | The headers to be sent when accessing the URL.                              | { "Content-Type": "application/json" } | No       |
| timeout | integer | The maximum time to wait for a response, in milliseconds. Defaults to 5000. | 5000                                   | No       |

## Advanced Usage

Under the hood ssrfproxy-node uses [axios](https://www.npmjs.com/package/axios#response-schema), so you can use any of the options that axios supports.
