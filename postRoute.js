const express = require('express');
const router = express.Router();
const MYSQLDB = require('./app');

router.post('/courses', (req, res) => {
    const { course_name, description, instructor_id, max_seats, start_date, end_date } = req.body;
    if (!course_name || !instructor_id || !max_seats || !start_date || !end_date) {
        return res.status(400).json({ "error_message": "All fields are required" });
    }
    const query = 'INSERT INTO courses (course_name, description, instructor_id, max_seats, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
    MYSQLDB.query(query, [course_name, description, instructor_id, max_seats, start_date, end_date], (err, result) => {
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Course added successfully" });
    });
});


// a child can able to rigester the course here
router.post('/courses/:course_id/register',(req,res)=>{
    const course_id = req.params.course_id;
    const {name,email,instructor_id,linkedin_profile} = req.body;
    console.log("course ID -> "+course_id);
    if(!name || !email || !course_id || !instructor_id || !linkedin_profile)
        res.status(400).json({"error_message":"All fields are required"});
    const query = 'INSERT INTO Leads (name,email,course_id,instructor_id,linkedin_profile) VALUES (?,?,?,?,?)';
    MYSQLDB.query(query,[name,email,course_id,instructor_id,linkedin_profile], (err, result) => {
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Course added successfully" });
    });
});


router.post('/leads/:lead_id/comment',(req,res)=>{
    const lead_id = req.params.lead_id;
    const {comment,instructor_id} = req.body;
    if(!comment || !lead_id || !instructor_id)
        res.status(400).json({"error_message":"All fields are required"});
    const query = 'INSERT INTO comments (lead_id,comment,instructor_id) VALUES (?,?,?)';
    MYSQLDB.query(query,[lead_id,comment,instructor_id], (err, result) => {
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Comment added successfully" });
    });
});

router.post('/instructors/register', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ "error_message": "All fields are required" });
    }
    const query = 'INSERT INTO instructors (name, email) VALUES (?, ?)';
    MYSQLDB.query(query, [name, email], (err, result) => {
        if (err) {
            console.log("Error -> " + err);
            return res.status(500).json({ "error_message": err });
        }
        res.status(200).json({ "message": "Instructor added successfully" });
    });
});

module.exports = router;
