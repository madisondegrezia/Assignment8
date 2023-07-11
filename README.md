# Assignment8

## Table of contents  
* [Objective](#Objective)
* [Task Description](#Task-description)
* [Postman](#Postman)
* [Screenshots](#Screenshots)

## Objective
Create a Book Inventory Management API using Node.js, Express.js, and PostgreSQL to perform CRUD operations on book data.

## Task Description

* Set up a Node.js project with Express.js and PostgreSQL.
  * Initialize a new Node.js project using npm or yarn.
  * Install the necessary dependencies such as Express.js and the PostgreSQL library (pg).
  * Set up a basic Express.js server.
* Create a PostgreSQL database and set up the necessary tables.
  * Using the psql command-line utility or a database management tool like DBeaver or pgAdmin, create a new PostgreSQL database for the book inventory management.
  * Design the necessary tables to store book data. For example, you can have a table named books with columns such as id, title, author, genre, and quantity. Be mindful of the data types and constraints when creating the tables.
* Implement the API endpoints to perform CRUD operations on books.
  * Set up the necessary Express.js routes and handlers to handle CRUD operations.
  * Create a route to retrieve all books from the database (GET /books).
  * Create a route to retrieve a specific book by ID from the database (GET /books/:id).
  * Create a route to add a new book to the database (POST /books).
  * Create a route to update a book by ID in the database (PATCH /books/:id).
  * Create a route to delete a book by ID from the database (DELETE /books/:id).
  * Use SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.
* Test the API endpoints using Postman.
  * Use Postman or any API testing tool to send requests to the API endpoints. (add screenshots in the repo README of your sucessful API calls)
  * Test each endpoint (GET, POST, PATCH, DELETE) with different scenarios to ensure they function correctly.
  * Verify that the API endpoints are correctly interacting with the PostgreSQL database and returning the expected results.

## Postman
Link to Postman Collection:

## Screenshots
<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/970388ba-cf1c-460d-b991-572375703c02" width=60% height=60%>

The above image shows the rows returned for the books table.

<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/d8b50a48-afad-41ba-971c-539c8b99a0bb" width=60% height=60%>

The above image shows the GET request to retrieve all books in the database.

<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/186d6bb3-a8be-472d-bf79-f4fa43830223" width=60% height=60%>

The above image shows the GET request to retrieve a specific book by id in the database.

<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/ee9138ef-4568-4dbe-8bb6-b6445db7a477" width=60% height=60%>

The above image shows the POST request to add a new book to the database.

<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/0ca48897-5eed-4bb8-b7e6-912de5e69aeb" width=60% height=60%>

The above image shows the PATCH request to update a book by ID in the database.

<img src="https://github.com/madisondegrezia/Assignment8/assets/89614960/abff870a-8477-4606-b518-eec1aa015802" width=60% height=60%>

The above image shows the DELETE request to delete a book by ID from the database.







