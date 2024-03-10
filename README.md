# Airtribe

Airtribe is a web application designed to manage courses, instructors, learners (leads), and comments within an educational platform.

## Table of Contents
- [Introduction](#introduction)
- [Database Schema](#database-schema)
- [Node.js Application](#nodejs-application)
- [Routes](#routes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Airtribe is a project aimed at facilitating the management of courses, instructors, learners, and comments within an educational platform. It provides functionalities to create and manage courses, register learners, and allow instructors to add comments against learners.

## Database Schema

The database schema for Airtribe consists of the following tables:

1. **Instructors**: Stores information about instructors.
2. **Courses**: Stores information about courses, including the instructor associated with each course.
3. **Leads**: Stores information about learners (leads) applying for courses, along with their associated courses and instructors.
4. **Comments**: Stores comments made by instructors against leads.

## Node.js Application

The Node.js application for Airtribe is responsible for handling HTTP requests and interacting with the database. It utilizes the Express.js framework for routing and MySQL for database operations.

## Routes

The following routes are defined in the Node.js application:

- **GET /leads**: Retrieves leads based on a search query (either email or name).
- **POST /courses**: Adds a new course to the database.
- **POST /courses/:course_id/register**: Registers a learner for a specific course.
- **POST /leads/:lead_id/comment**: Adds a comment from an instructor against a lead.
- **POST /instructors/register**: Registers a new instructor.
- **PUT /courses/:course_id**: Updates the details of a course.
- **PUT /leads/:lead_id**: Updates the status of a lead.

## Usage

To use the Airtribe application, follow these steps:

1. Set up the database by executing the provided SQL script (`Airtribe.sql`).
2. Configure the Node.js application to connect to the database (`app.js`).
3. Start the Node.js server by running `node app.js`.
4. Access the application through the defined routes to perform CRUD operations on courses, leads, and instructors.

## Contributing

Contributions to Airtribe are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

