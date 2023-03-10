const express = require("express");
const router = require("./routes/index.routes");

const app = express();

app.use(express.json({ limit: "50mb" }));

router(app);

module.exports = app;
