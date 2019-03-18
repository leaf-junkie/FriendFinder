const express = require('express');
const router = express.Router();

// A GET route with the url /api/friends
router.get('/api/friends', function(req, res) {
    res.send("hi");
});

// A POST route /api/friends. This will be used to handle incoming survey results
// TODO:This route will also be used to handle the compatibility logic
router.post('/api/friends', function(req, res) {
    res.status(200).send(req.query);
});

module.exports = router;