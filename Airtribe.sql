-- Path: Airtribe.sql
create schema Airtribe;

-- Database relations:
-- - There are multiple instructors on Airtribe.
-- - Every instructor can start multiple courses.
-- - Multiple learners can apply for a course using application form (Leads)
-- - Instructor can add comments against every lead

use Airtribe;
-- Create the instructors table
create table Instructors (
    instructor_id int primary key auto_increment,
    name varchar(60) not null,
    email varchar(50) not null,
    created_at timestamp default current_timestamp
);

    use Airtribe;
    select * from Instructors;

use Airtribe;
-- Create the courses table
create table Courses (
    id int primary key auto_increment,
    course_name varchar(50) not null,
    description text not null,
    instructor_id int not null,
    max_seats int not null,
    created_at timestamp default current_timestamp,
    start_date DATE,
    end_date DATE,
    foreign key (instructor_id) references Instructors(instructor_id)
);
    
    use Airtribe;
    update courses set course_name='a',description='b',instructor_id=1,max_seats=123,start_date='2024-09-15',end_date='2024-11-30' where id=2;
    select * from courses;



use Airtribe;
-- Create the leads/ table
create table Leads (
    id int primary key auto_increment,
    name varchar(60) not null,
    email varchar(60) not null,
    course_id int not null,
    instructor_id int not null,
    created_at timestamp default current_timestamp,
    linkedin_profile varchar(100) NOT NULL,
    status varchar(20) not null default 'pending',
    foreign key (course_id) references Courses(id),
    foreign key (instructor_id) references Instructors(instructor_id)
);

    use Airtribe;
    select * from leads;


use Airtribe;
-- Create the comments table
create table Comments (
    id int primary key auto_increment,
    comment text not null,
    lead_id int not null,
    instructor_id int not null,
    created_at timestamp default current_timestamp,
    foreign key (lead_id) references Leads(id),
    foreign key (instructor_id) references Instructors(instructor_id)
);
```


-- Drop the database
drop database Airtribe;