const express = require('express');
const router = express.Router();

// A GET route with the url /api/friends. This will be used to display a 
// JSON of all possible friends.
router.get('/api/friends', function(req, res) {
    // Import friends.js to send
    res.send("hi");
    // const friends = req.params.friends;
});

// router.call

// A POST route /api/friends. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.
router.post('/api/friends', function(req, res) {
    res.status(200).send(req.query);
});

// res.send(result.toString());

module.exports = router;