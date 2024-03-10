// Step 5: Import necessary modules
    // importing express : web application framework for Node.js
    const express = require('express');

    // here we have set up the express to create an app and configure it to parse with JSON payloads.
    // here express is an application and we have created an instance of that application
    const app = express();
    // here we use Express to parse incoming requests with JSON payloads.
    app.use(express.json());

// Step 6: Define a route that listens to requests
    // we have make this application a server by getting it to listen for connections
    // here we have connect to a port to listen for incoming requests
    const PORT = process.env.PORT || 3000;
    // process.env.PORT variable -> set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure.
    // In case the process.env.PORT variable is not set, we’ll default to using port 3000.

    // add the following code to the app.js file in order to set up the server to listen on the specified port:
    app.listen(PORT ,()=>{
        console.log("server Listening on PORT:", PORT)
        console.log("Press Ctrl+C to quit.")
    });

    // Import the MYSQLDB module
    const mysql = require('mysql');

    // Create a connection to the database
    const MYSQLDB = mysql.createConnection({
        host: 'localhost',
        connectionLimit: 10,
        user:'krishan',
        password:'1234',
        database:'airtribe'
    });

    // Connect to the database
    module.exports = MYSQLDB;

    // creating a route to handle a GET request
    const getRoute = require('./getRoute');
    app.use('/api/v1',getRoute);

    // creating a route to handle a POST request
    const postRoute = require('./postRoute');
    app.use('/api/v1',postRoute);

    // creating a route to handle a PUT request
    const putRoute = require('./putRoute');
    app.use('/api/v1',putRoute);
    
    // creating a route to handle a DELETE request
    const deleteRoute = require('./deleteRoute');
    app.use('/api/v1',deleteRoute);










// // Step 7: Define an endpoint
//     // start by defining a status endpoint to ensure the API is working.
//     // Express lets you define routes using the app.METHOD() function
//     // METHOD -> reffers -> HTTP method {GET, POST, PUT, and DELETE}
        
//         // For a GET request, you’d define the route by adding an app.get()
//         // This function has two parameters. We’ll use the first parameter to define the path. In this case, it is the /status endpoint:
//             // app.get("/status",());
        
//         // Now we’ll add a callback function as the second parameter,
//         // defines what we will do when the request is called. 
//         // This function has two parameters:
//             // -> the request object (which contains details like the HTTP method, headers, and request body) 
//             // -> the response object (which defines the information that we want to send)
//                     // ->The response (res) object contains different methods of sending a response to the client,
//                     //   such as res.send(), res.json(), and res.render().
//         // app.get("/status",(request,response));
//         // With response.send(), we then define the response we want to return. But since we want to send back JSON, 
//         // we’ll need to first define a JSON object. So, we define a status variable and create an object:
        
//         // response.send(status) is now a function that takes the JSON object as the argument.
//         app.get("/status",(request,response)=>{
//             const status = {
//                 "status" : "running"
//             };
//             response.send(status);
//         });

//         // Define a route to handle a POST request
//         // To handle a POST request, we’ll use the app.post() method.
//         // This method takes two parameters: the path and a callback function.
//         // The callback function takes the request and response objects as parameters.
//         // We’ll use the request object to get the data sent from the client.
//         // The response object will be used to send a response back to the client.
//         app.post("/signup",(request,response)=>{
//             const {username,email} = request.body;
//             const user = {
//                 username,
//                 email
//             };
//             response.send(user);
//         });