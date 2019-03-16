// A GET route with the url /api/friends. This will be used to display a 
// JSON of all possible friends.
app.get('/friends', function(req, res) {
    const friends = req.params.friends;
});

// A POST routes /api/friends. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.
app.post('/', function(req, res) {

});

res.send(result.toString());