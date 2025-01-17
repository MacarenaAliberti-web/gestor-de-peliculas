const Express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = Express();

app.use(Express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(router);

module.exports = app;