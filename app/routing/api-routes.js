// require data file
var friendsData = require("../data/friends.js");

module.exports = function(app) {
    // GET route to show all friends data
    app.get("/api/friends", function(request, response) {
        response.json(friendsData);
    });
    // POST route for survey results and friends compatibility
    app.post("/api/friends", function(request, response) {
        var newFriend = request.body;
        friendsData.push(newFriend);
        response.json(newFriend);
    });
}

// take the newFriend scores nad loop through each friend