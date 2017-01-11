// DEPENDENCIES

var path = require("path");
// GET requests

module.exports = function (app) {
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    // home page
    app.use(function (request, response) {
        response.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};