const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

// to send json data to server
app.use(express.json());

// to send urlencoded
app.use(express.urlencoded({ extended: false }));

// to use errorHandler
app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
