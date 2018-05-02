const express = require('express'); // require "express" module for apis
const path = require('path'); // require "path" module to set the path
var bcrypt = require('bcryptjs'); // require "bcryptjs" module encrypt password
const methodList = require('./controller/methods') // require controoler to get methods of All
const bodyParser = require('body-parser'); // require "body-parser" to json data
const session = require('express-session'); // require session through "express-session"
var cors = require('cors') // require "cors" module solve croos-browser request
const app = express(); // call express module and get instance of it In App

app.use(cors()); // when Any web services call its handle cross origin request

app.use(session({secret: 'project'})); // manage session

app.use(bodyParser.json()); // Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist


// app.use(methodList.checkRoutingParams) // check routes in every webservices

// app.post("/login", methodList.checkLoginCredintilas)
// app.get("/listUser", methodList.gettingListOfAllUser)

app.use('/taskmanagement', require('./controller/taskManagement'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));