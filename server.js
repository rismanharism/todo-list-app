const express = require('express');
const bodyParser = require('body-parser');
const { initDB } = require('./models');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.use('/', todoRoutes);

// Initialize Database
initDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
