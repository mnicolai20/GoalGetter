const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const passport = require('./config/passport');
const cookie = require("cookie-parser");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  }
  // Send every request to the React app
  // Define any API routes before this runs
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 
  // We need to use sessions to keep track of our user's login status
  app.use(cookie());
  app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  const routes = require("./routes");
  app.use(routes);


// mongoose.connect("mongodb+srv://dbGoals:Goals@cluster0.scopj.mongodb.net/dbGoals?retryWrites=true&w=majority");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/goalsdb";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, function () {
    console.log(`We Did it  ==> API Server now listening on PORT ${PORT}!`);
});
