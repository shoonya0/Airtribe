const express = require('express');
const router = express.Router();
const MYSQLDB = require('./app');

// this is use by instructor to update the course
router.put('/courses/:course_id',(req,res)=>{
  const courseId = req.params.course_id;
  const {course_name,description,instructor_id,max_seats,start_date,end_date} = req.body;
  
  // console.log("Instructor ID -> "+instructor_id);
  // console.log("course ID -> "+courseId);
  
  if(!instructor_id || !courseId)
    res.status(400).json({"error_message":"Instructor id is required"});


  var query = 'update courses set ';
  if(instructor_id) query += 'instructor_id='+instructor_id;
  if(course_name) query += ','+'course_name="'+course_name+'"';
  if(description) query += ','+'description="'+description+'"';
  if(max_seats) query += ','+'max_seats='+max_seats;
  if(start_date) query += ','+'start_date='+start_date;
  if(end_date) query += ','+'end_date='+end_date;
  query += ' where id=?';

  console.log("querry -> "+query);
  
  MYSQLDB.query(query,[courseId], (err, result) => {
      if(err) res.status(500).json({"error_message":err});
      if (err) {
        console.log("Error -> " + err);
        return res.status(500).json({ "error_message": err });
    }

    if (result.affectedRows > 0) {
      console.log('Update query executed successfully. Rows affected:', result.affectedRows);
      res.status(200).json({"message":"Course updated successfully"});
    } else {
      console.log('Update query did not affect any rows.');
      res.status(404).json({"error_message":"Course not found"});
    }


    // res.status(200).json({"message":"Course updated successfully"});
  });
});


// lead update api
router.put('/leads/:lead_id',(req,res)=>{
  const leadId = req.params.lead_id;
  const {status} = req.body;
  if(!status || !leadId)
      res.status(400).json({"error_message":"All fields are required"});
  const query = 'update leads set status=? where id=?';
  MYSQLDB.query(query,[status,leadId], (err, result) => {
    if (err) {
      console.log("Error -> " + err);
      return res.status(500).json({ "error_message": err });
    }
    res.status(200).json({ "message": "Lead updated successfully" });
  });
});

module.exports = router;