// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//require dependencies 
var path = require('path');

//import the list of friend entries 
var friends = require("../data/friends");


//export API routes 
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends); 
    });

    //add new friends entry 
    app.post('/api/friends', function(req, res) {
        //capture the user input object 
        var userInput = req.body;
        //testing
        //console.log('userInput = ' +JSON.stringify(userInput));
        var userResponses = userInput.scores;
        //testing 
        console.log('userResponse = '+userResponses);

        //compute best match 
        var matchName = '';
        var matchImage = '';
        var totalDifference = 1000;

        //examine all exisiting friend match 
        for (var i=0; i<friends.length; i++) {
            //testing 
            console.log('friend = ' + JSON.stringify(friends[i]));
            var diff = 0; 
            for (var j = 0; j<userResponses.length; j++) { 
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            //testing
            //console.log('diff = ' + diff);

            //if lowest difference, record the friend match
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name; 
                matchImage = friends[i].photo;

                
            }

        }
        //add new user 
        friends.push(userInput);

        //send response 
        res.json({status: 'OK', matchName:matchName, matchImage: matchImage});
        


    });
}