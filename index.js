const express = require("express");
const connectDatabase = require("./db/database");
const errorHandler = require("./middlewares/ErrorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");

// connecting to database
connectDatabase();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ exposedHeaders: "X-Total-Count" }));

app.use("/products", require("./routes/productRoutes"));
app.use("/categories", require("./routes/categoryRoute"));
app.use("/brands", require("./routes/brandRoutes"));

// app.use(errorHandler);

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

// creating a server
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
