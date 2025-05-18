const http = require('http');
const express = require("express");
const oasTools = require("@oas-tools/core");
const config = require("./oastools.config.js");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
var serverPort = 8080;
app.disable('x-powered-by');

oasTools.initialize(app, config).then(() => {
    http.createServer(app).listen(serverPort, () => console.log("Server started!"));
})
