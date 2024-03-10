const express = require('express');
const router = express.Router();
const MYSQLDB = require('./app');

function isValidEmail(email) {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

router.get('/leads', (req, res) => {
    const search = req.query.search;
    if(!search) return res.status(400).json({"error_message":"Search query is required"});    
    var query;
    if (isValidEmail(search))
        query = 'SELECT * FROM leads WHERE email = ?';
    else
        query = 'SELECT * FROM leads WHERE name = ?';

    MYSQLDB.query(query, [search], (err, result) => {
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        
        res.status(200).json(result);
    });
});


module.exports = router;