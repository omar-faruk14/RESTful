
const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

const client = new KintoneRestAPIClient({
    baseUrl: "https://kybkt9gzqkzo.cybozu.com",
    auth: { apiToken: 'drBg7tfxen1tgsbcIbAUlydyik1J4srn91ppKlch' }
});

module.exports = client;
