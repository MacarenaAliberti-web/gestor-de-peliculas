const Express = require("express");
const router = require("./routes");

const app = Express();

app.use(router);

module.exports = app;