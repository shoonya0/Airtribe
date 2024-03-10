// This file will contain the routes for POST requests
//  The first route will be used to add a new lead to the database.
const express = require('express');
// Create a router
const router = express.Router();
// Import the MYSQLDB module
const MYSQLDB = require('./app');

// Define a route to add a new lead
router.post('/courses', (req, res) => {
    // Get the data from the request
    const { course_name, description, instructor_id, max_seats, start_date, end_date } = req.body;
    // If any of the fields are missing, return an error
    if (!course_name || !instructor_id || !max_seats || !start_date || !end_date) {
        return res.status(400).json({ "error_message": "All fields are required" });
    }
    // Create a query to insert the new lead into the database
    const query = 'INSERT INTO courses (course_name, description, instructor_id, max_seats, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
    // Execute the query
    MYSQLDB.query(query, [course_name, description, instructor_id, max_seats, start_date, end_date], (err, result) => {
        // If the query is not successful, return an error
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        // If the query is successful, return a success message
        res.status(200).json({ "message": "Course added successfully" });
    });
});


// Define a route to add a new lead
router.post('/courses/:course_id/register', (req, res) => {
    // Get the data from the request
    const course_id = req.params.course_id;
    // Get the data from the request
    const { name, email, instructor_id, linkedin_profile } = req.body;
    // for debugging
    console.log("course ID -> " + course_id);
    // If any of the fields are missing, return an error
    if (!name || !email || !course_id || !instructor_id || !linkedin_profile)
        res.status(400).json({ "error_message": "All fields are required" });
    // Create a query to insert the new lead into the database
    const query = 'INSERT INTO Leads (name,email,course_id,instructor_id,linkedin_profile) VALUES (?,?,?,?,?)';
    // Execute the query
    MYSQLDB.query(query, [name, email, course_id, instructor_id, linkedin_profile], (err, result) => {
        // If the query is not successful, return an error
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        // If the query is successful, return a success message
        res.status(200).json({ "message": "Course added successfully" });
    });
});


// Define a route to add a new comment
router.post('/leads/:lead_id/comment', (req, res) => {
    // Get the data from the request
    const lead_id = req.params.lead_id;
    const { comment, instructor_id } = req.body;
    // If any of the fields are missing, return an error
    if (!comment || !lead_id || !instructor_id)
        res.status(400).json({ "error_message": "All fields are required" });
    // Create a query to insert the new lead into the database
    const query = 'INSERT INTO comments (lead_id,comment,instructor_id) VALUES (?,?,?)';
    // Execute the query
    MYSQLDB.query(query, [lead_id, comment, instructor_id], (err, result) => {
        // If the query is not successful, return an error
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Comment added successfully" });
    });
});

// Define a route to add a new instructor
router.post('/instructors/register', (req, res) => {
    // Get the data from the request
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ "error_message": "All fields are required" });
    }
    // Create a query to insert the new lead into the database
    const query = 'INSERT INTO instructors (name, email) VALUES (?, ?)';
    MYSQLDB.query(query, [name, email], (err, result) => {
        // If the query is not successful, return an error
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Instructor added successfully" });
    });
});

module.exports = router;