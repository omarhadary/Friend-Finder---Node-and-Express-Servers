// friends data will be saved as an array of objects
var friendsArray = [
    {
        name: "Soke",
        photo: "http://images.desimartini.com/media/uploads/2015-5/bad-santa.jpg",
        scores: ["4", "2", "4", "1", "3", "2", "5", "1", "3", "2"]
    },
    {
        name: "Lebowski",
        photo: "http://www.cinechronicle.com/wp-content/uploads/2011/07/Cardigan-Dude-The-Big-Lebowski.jpg",
        scores: ["4", "3", "1", "2", "2", "1", "3", "2", "5", "2"]
    },
    {
        name: "Blume",
        photo: "http://www.indiewire.com/wp-content/uploads/2016/05/tumblr-m5sqf33ebp1qhrqkso1-1280.jpg",
        scores: ["5", "4", "4", "5", "2", "3", "1", "4", "5", "3"]
    },
    {
        name: "Bluto",
        photo: "https://az616578.vo.msecnd.net/files/2016/01/02/635873689157228995952164191_Freshman%20Year.jpg",
        scores: ["1", "3", "2", "3", "5", "1", "2", "2", "3", "3"]
    },
];

var newFriend =
    {
        name: "omar",
        photo: "http://images.desimartini.com/media/uploads/2015-5/bad-santa.jpg",
        scores: ["1", "1", "3", "2", "4", "5", "2", "1", "3", "2"]
    }

function totalDifference() {
    for (i = 0; i < friendsArray.length; i++) { 
    var scoresDifference = parseInt(newFriend.scores) - parseInt(friendsArray.scores[i]);
    console.log(scoresDifference);
}
}

totalDifference(); 

// function sorting() {
//     friendsArray.sort(function(a, b){return a.scores[0]-b.scores[0]})
//     console.log(friendsArray);
// }
// sorting();

// export the friends data

module.exports = friendsArray;