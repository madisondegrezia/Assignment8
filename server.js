const express = require("express");
const app = express();
const port = 4000;
const books = require("./books");
const { query } = require("./database");
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Response status: ${res.statusCode}`);
  });
  next();
});
app.use(express.json());

function getNextIdFromCollection(collection) {
  if (collection.length === 0) return 1;
  const lastRecord = collection[collection.length - 1];
  return lastRecord.id + 1;
}

app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API!");
});

// Get all books
app.get("/books", async (req, res) => {
  try {
    const allBooks = await query("SELECT * FROM books");
    res.json(allBooks.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a specific book
app.get("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  try {
    const book = await query("SELECT * FROM books WHERE id = $1", [bookId]);
    const foundBook = book.rows[0];
    if (foundBook) {
      res.json(foundBook);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create a new book
app.post("/books", async (req, res) => {
  const { title, author, genre, quantity, page_count } = req.body;

  try {
    const newbook = await query(
      `INSERT INTO books 
      (title, author, genre, quantity, page_count) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [title, author, genre, quantity, page_count]
    );
    console.log(newbook);
    res.status(201).json(newbook.rows[0]);
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a specific book
// **** DOES NOT WORK AS EXPECTED ****
app.patch("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  const fieldNames = [
    "title",
    "author",
    "genre",
    "quantity",
    "page_count",
  ].filter((name) => req.body[name]);

  let updatedValues = fieldNames.map((name) => req.body[name]);
  const setValuesSQL = fieldNames
    .map((name, i) => {
      return `${name} = $${i + 1}`;
    })
    .join(", ");

  try {
    const updatedBook = await query(
      `UPDATE books SET ${setValuesSQL} WHERE id = $${
        fieldNames.length + 1
      } RETURNING *`,
      [...updatedValues, bookId]
    );

    if (updatedBook.rows.length > 0) {
      res.status(200).json(updatedBook.rows[0]);
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.error(err);
  }
});

// Delete a specific book
app.delete("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  try {
    const deleteBook = await query("DELETE FROM books WHERE id = $1", [bookId]);
    if (deleteBook.rowCount > 0) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
