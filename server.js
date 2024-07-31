
const express = require('express');
const configureDb = require('./config'); // Ensure the path is correct
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');


const app = express();
const port = 5000;

// Connect to the database
configureDb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/forms', formRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

