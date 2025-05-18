const functions = require('firebase-functions');
const express = require('express');
const oasTools = require("@oas-tools/core");
const config = require("./oastools.config.js");
const bodyParser = require('body-parser');

const app = express();
var serverPort = 8080;

// Define your routes
app.use(express.json());
app.disable('x-powered-by');

oasTools.initialize(app, config).then(() => {
    http.createServer(app).listen(serverPort, () => console.log("Server started!"));
})
    
// Export the Express app as a Firebase function
exports.app = functions.https.onRequest(app);
