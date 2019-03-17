const express = require('express');
const path = require('path');
const survey = require('./app/data/survey');
const friends = require('./app/data/friends');
const apiRoutes = require('./app/routing/apiRoutes');
const app = express();
const instance = M.Modal.getInstance(elem);

const PORT = process.env.PORT || 8080;

// change whatever your path is - allows you to use images and custom css on heroku
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

module.exports = app;