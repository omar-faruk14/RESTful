
const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

const client = new KintoneRestAPIClient({
    baseUrl: "https://kybkt9gzqkzo.cybozu.com",
    auth: { apiToken: 'OLUdDMd16xyF7Hb35YBU0gxctdnMQR671fkcJj75' }
});

module.exports = client;