// Your server.js file should require the basic 
// npm packages we've used in class: express and path.

const foundation = require('foundation');
const express = require('express');
const path = require('path');

// change whatever your path is - allows you to use images and custom css on heroku
app.use(express.static(path.join(__dirname, './app/public')));
