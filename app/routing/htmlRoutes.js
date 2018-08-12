// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
//required dependecies 
var path = require('path');

//export HTML routes 
module.exports = function(app) {
    //home page 
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));

    });
    //survey page 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));

    });

}; 