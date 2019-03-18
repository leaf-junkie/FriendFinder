const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// A default, catch-all route that leads to home.html which displays the home page.
router.get('/', function(req, res) {
    const html = fs.readFileSync(path.join(__dirname,'../public/home.html'));
    res.send(html.toString());
});

// A GET Route to /survey which should display the survey page.
router.get('/survey', function(req, res) {
    const html = fs.readFileSync(path.join(__dirname,'../public/survey.html'));
    res.send(html.toString());
});

// A GET Route to /profile which should display the profile page.
router.get('/profile', function(req, res) {
    const html = fs.readFileSync(path.join(__dirname,'../public/profile.html'));
    res.send(html.toString());
});

module.exports = router;