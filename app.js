const express = require("express");
const bodyParser = require("body-parser"); //deprecated********
const request = require("request"); //deprecated*******
// require packages (like imports in java I think)

const app = express();
// create new express app (like creating a new object in java I think)

app.use(express.static("public"));
// all files needed to be sent to server

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
// when request home route at our server, must deliver this file to browser to read

app.post("/", function(req, res){
    app.use(bodyParser.urlencoded({extended: true}));

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

// log info that user entered, need bodyParser




app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

// setup our server to receive data on port 3000
// callback function notifies us if the server runs