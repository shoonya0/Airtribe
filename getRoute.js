// Require express and create a router
const express = require('express');
// Create a router
const router = express.Router();
// Import the MYSQLDB module
const MYSQLDB = require('./app');

// Define a route to get all leads
function isValidEmail(email) {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Define a route to get all leads
router.get('/leads', (req, res) => {
    const search = req.query.search;
    // If the search query is not provided, return an error
    if(!search) return res.status(400).json({"error_message":"Search query is required"});    
    var query;
    // Check if the search query is an email or a name
    if (isValidEmail(search))
        query = 'SELECT * FROM leads WHERE email = ?';
    else
        query = 'SELECT * FROM leads WHERE name = ?';

    // Execute the query
    MYSQLDB.query(query, [search], (err, result) => {
        // If the query is not successful, return an error
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        // If the query is successful, return the results
        res.status(200).json(result);
    });
});


module.exports = router;