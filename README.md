# Airtribe Web Application

This is a web application built using Node.js, Express, and MySQL database to handle API requests for Airtribe services.

## Features

- Handles HTTP requests (GET, POST, PUT, DELETE) using Express routing.
- Utilizes MySQL database to store and retrieve data.

## Setup Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL database installed and running locally.

### Installation for Node.js

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/airtribe-web-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd airtribe-web-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up MySQL database:
   
   - Make sure your MySQL server is running.
   - Create a new database named `airtribe`.
   - Update the `user` and `password` fields in the `app.js` file with your MySQL credentials.

### Usage

1. Start the server:

    ```bash
    node app.js
    ```

2. Access the application in your web browser at `http://localhost:3000`.

## API Routes

- **GET /api/v1** - Retrieve data from the database.
- **POST /api/v1** - Add new data to the database.
- **PUT /api/v1** - Update existing data in the database.
- **DELETE /api/v1** - Delete data from the database.


## API Routes

### Adding a New Lead

- **POST /api/v1/courses** - Add a new lead to the database.

```javascript
// Request Body:
{
    "course_name": "Course Name",
    "description": "Course Description",
    "instructor_id": "Instructor ID",
    "max_seats": "Max Seats",
    "start_date": "Start Date",
    "end_date": "End Date"
}
```

### Registering for a Course

- **POST /api/v1/courses/:course_id/register** - Register for a course.
```javascript
// Request Body:
{
    "name": "Your Name",
    "email": "Your Email",
    "instructor_id": "Instructor ID",
    "linkedin_profile": "LinkedIn Profile"
}
```

### Adding a Comment

- **POST /api/v1/leads/:lead_id/comment** - Add a comment for a lead.
```javascript
// Request Body:
{
    "comment": "Your Comment",
    "instructor_id": "Instructor ID"
}
```

### Registering a New Instructor
- **POST /api/v1/instructors/register** - Register a new instructor.
```javascript
// Request Body:
{
    "name": "Instructor Name",
    "email": "Instructor Email"
}
```

### Updating Course Details

- **PUT /api/v1/courses/:course_id** - Update course details.

```javascript
// Request Body:
{
    "course_name": "New Course Name",
    "description": "New Course Description",
    "instructor_id": "New Instructor ID",
    "max_seats": "New Max Seats",
    "start_date": "New Start Date",
    "end_date": "New End Date"
}
```

### Updating Lead Details
- **PUT /api/v1/leads/:lead_id** - Update lead details.
```javascript
// Request Body:
{
    "status": "New Status"
}
```
### Retrieving Leads

- **GET /api/v1/leads?search=:search_query** - Retrieve leads by email or name.

    - **Query Parameters:**
        - `search`: Search query by email or name.

    - **Response:**
        - Returns leads matching the search query.

# Airtribe Database Schema

This SQL script defines the schema for the Airtribe database, which includes tables for instructors, courses, leads, and comments.

## Schema Overview

### Instructors Table

- Stores information about instructors.
- Each instructor has a unique ID, name, email, and creation timestamp.

### Courses Table

- Stores information about courses offered.
- Each course has a unique ID, name, description, instructor ID, maximum seats, start date, end date, and creation timestamp.
- Instructor ID is a foreign key referencing the Instructors table.

### Leads Table

- Stores information about leads or learners applying for courses.
- Each lead has a unique ID, name, email, course ID, instructor ID, LinkedIn profile, status, and creation timestamp.
- Course ID and Instructor ID are foreign keys referencing the Courses and Instructors tables respectively.

### Comments Table

- Stores comments added by instructors against leads.
- Each comment has a unique ID, text, lead ID, instructor ID, and creation timestamp.
- Lead ID and Instructor ID are foreign keys referencing the Leads and Instructors tables respectively.

## Usage

1. **Database Creation:**

    - Run the SQL script to create the Airtribe database and its tables.

2. **Database Interaction:**

    - Use SQL queries to interact with the database, such as inserting, updating, or querying data.

3. **Example Queries:**

    - Example queries are provided within the script to demonstrate data manipulation and retrieval.

## Contributors

- [Krishan](https://github.com/shoonya0)

## License

This project is licensed under the [MIT License](LICENSE).