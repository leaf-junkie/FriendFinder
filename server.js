const foundation = require('foundation');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// change whatever your path is - allows you to use images and custom css on heroku
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect((err) => {
    if (err) {
      console.error(`Error connecting: ${err.stack}`);
      return;
    }
    console.log(`Connected as id: ${connection.threadId}`);
});

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});