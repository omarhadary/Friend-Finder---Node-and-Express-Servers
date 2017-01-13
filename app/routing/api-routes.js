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

// // take the newFriend scores nad loop through each friend

// function totalDifference() {
//     for (i = 0; i < friendsArray.length; i++) { 
//     var scoresDifference = parseInt(newFriend.scores) - parseInt(friendsArray.scores[i]);
//     console.log(scoresDifference);
// }
// }

// totalDifference(); 


// function sorting() {
//     for (i = 0; i < friendsArray.length; i++) {
//     friendsArray.sort(function(a, b){return a.scores[0]-b.scores[0]})
//     console.log(friendsArray);
// }
// }
// sorting();

// function sorting() {
//     friendsArray.sort(function(a, b){return a.scores[0]-b.scores[0]})
//     console.log(friendsArray);
// }
// sorting();

// export the friends data