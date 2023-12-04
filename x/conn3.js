const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

const client = new KintoneRestAPIClient({
    baseUrl: "https://kybkt9gzqkzo.cybozu.com",
    auth: { apiToken: 'yqC9EbR2wulgoFTClY9ovIqAuRVa6tlsKiMuyEZ2' }
});

module.exports = client;