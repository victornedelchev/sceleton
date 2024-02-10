const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { PORT, DB_URL } = require('./constants');
const routes = require('./router');

// Init
const app = express();

// Express configurations
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Handlebars configuration
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Database connection
async function dbConnect() {
    await mongoose.connect(DB_URL);
}

dbConnect()
.then(() => {
    console.log('Successfully connected to the database!');
})
.catch(err => console.log(`Error while connecting to db. Error: ${err}`));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`));