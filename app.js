const express = require('express');
const app = express();

// Import routes
const taskRoutes = require('./routes/taskRoutes');

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/', taskRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));