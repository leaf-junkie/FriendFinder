const express = require('express');
const friends = require('../data/friends');
const router = express.Router();

// A GET route with the url /api/friends
router.get('/api/friends', function(req, res) {
    res.send("hi");
});

// A POST route /api/friends. This will be used to handle incoming survey results
// TODO:This route will also be used to handle the compatibility logic
router.post('/api/friends', function(req, res) {
    const surveyResult = req.query;
    const bestMatch = friends.findBestMatch(surveyResult);
    res.status(200).send(bestMatch);
});

module.exports = router;