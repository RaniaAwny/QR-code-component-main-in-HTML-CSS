projectData = {};
// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
// Dependencies
const bodyParser = require("body-parser")
//Middleware
// Here we are configuring express to use body-parser as a middleware
// Cors for cross origin allownce 
const cors = require("cors");
app.use(cors());
// Initializing the main project folder
app.use(express.static("qr-code-component-main"));

const port = 5000;
// Callback function
const server = app.listen(port, listening);
// Listening function
function listening() {
console.log("server running")
console.log(`server is running on localhost: ${port}`);
}



