const express = require('express');
const path = require('path');
const { PORT } = require('./constants');
const routes = require('./router');

// Init
const app = express();

// Express configurations
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send('OK!');
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`));