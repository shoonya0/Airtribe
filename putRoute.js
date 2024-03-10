// This file contains the code for updating the course and lead details.
// The first route is used to update the course details.
const express = require('express');
// Create a router
const router = express.Router();
// Import the MYSQLDB module
const MYSQLDB = require('./app');

// Define a route to update a course
router.put('/courses/:course_id', (req, res) => {
  // Get the data from the request
  const courseId = req.params.course_id;
  const { course_name, description, instructor_id, max_seats, start_date, end_date } = req.body;

  // console.log("Instructor ID -> "+instructor_id);
  // console.log("course ID -> "+courseId);

  // If any of the fields are missing, return an error
  if (!instructor_id || !courseId)
    res.status(400).json({ "error_message": "Instructor id is required" });

  // Create a query to update the course in the database
  var query = 'update courses set ';
  if (instructor_id) query += 'instructor_id=' + instructor_id;
  if (course_name) query += ',' + 'course_name="' + course_name + '"';
  if (description) query += ',' + 'description="' + description + '"';
  if (max_seats) query += ',' + 'max_seats=' + max_seats;
  if (start_date) query += ',' + 'start_date=' + start_date;
  if (end_date) query += ',' + 'end_date=' + end_date;
  query += ' where id=?';

  // for debugging
  console.log("querry -> " + query);

  // Execute the query
  MYSQLDB.query(query, [courseId], (err, result) => {
    // error handling
    if (err) res.status(500).json({ "error_message": err });
    if (err) {
      console.log("Error -> " + err);
      return res.status(500).json({ "error_message": err });
    }

    // If the query is successful, return a success message
    if (result.affectedRows > 0) {
      console.log('Update query executed successfully. Rows affected:', result.affectedRows);
      res.status(200).json({ "message": "Course updated successfully" });
    } else {
      console.log('Update query did not affect any rows.');
      res.status(404).json({ "error_message": "Course not found" });
    }
  });
});


// Define a route to update a lead
router.put('/leads/:lead_id', (req, res) => {
  // Get the data from the request
  const leadId = req.params.lead_id;
  const { status } = req.body;
  // If any of the fields are missing, return an error
  if (!status || !leadId)
    res.status(400).json({ "error_message": "All fields are required" });
  // Create a query to update the lead in the database
  const query = 'update leads set status=? where id=?';
  MYSQLDB.query(query, [status, leadId], (err, result) => {
    // If the query is not successful, return an error
    if (err) {
      console.log("Error -> " + err);
      return res.status(500).json({ "error_message": err });
    }
    res.status(200).json({ "message": "Lead updated successfully" });
  });
});

module.exports = router;