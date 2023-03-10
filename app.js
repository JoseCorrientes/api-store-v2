const express = require("express");
const router = require('./routes/index.routes');


const app = express();

app.use(express.json());

router(app);


module.exports = app;