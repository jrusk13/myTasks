const express = require("express");
const app = express();
const path = require("path");

// Import routes
const taskRouter = require("./routes/taskRoutes");
const jobRouter = require("./routes/jobRoutes");

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", taskRouter);
app.use("/", jobRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
