
// importing express : web application framework for Node.js
const express = require('express');

// here we have set up the express to create an app and configure it to parse with JSON payloads.
// here express is an application and we have created an instance of that application
const app = express();
// here we use Express to parse incoming requests with JSON payloads.
app.use(express.json());


// we have make this application a server by getting it to listen for connections
// here we have connect to a port to listen for incoming requests
const PORT = process.env.PORT || 3000;
// process.env.PORT variable -> set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure.
// In case the process.env.PORT variable is not set, we’ll default to using port 3000.

// add the following code to the app.js file in order to set up the server to listen on the specified port:
app.listen(PORT, () => {
    console.log("server Listening on PORT:", PORT)
    console.log("Press Ctrl+C to quit.")
});

// Import the MYSQLDB module
const mysql = require('mysql');

// Create a connection to the database
const MYSQLDB = mysql.createConnection({
    host: 'localhost',
    connectionLimit: 10,
    user: 'krishan',
    password: '1234',
    database: 'airtribe'
});

// Connect to the database
module.exports = MYSQLDB;

// creating a route to handle a GET request
const getRoute = require('./getRoute');
app.use('/api/v1', getRoute);

// creating a route to handle a POST request
const postRoute = require('./postRoute');
app.use('/api/v1', postRoute);

// creating a route to handle a PUT request
const putRoute = require('./putRoute');
app.use('/api/v1', putRoute);

// creating a route to handle a DELETE request
const deleteRoute = require('./deleteRoute');
app.use('/api/v1', deleteRoute);