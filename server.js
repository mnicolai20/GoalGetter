const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const passport = require('./config/passport');
const cookie = require("cookie-parser");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  }
  // Send every request to the React app
  // Define any API routes before this runs
  

  // We need to use sessions to keep track of our user's login status
  app.use(cookie());
  app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  const routes = require("./routes");
  app.use(routes);

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 

// mongoose.connect("mongodb+srv://dbGoals:Goals@cluster0.scopj.mongodb.net/dbGoals?retryWrites=true&w=majority");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://test:Matthew3@ds027799.mlab.com:27799/heroku_1np29phj";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, function () {
    console.log(`We Did it  ==> API Server now listening on PORT ${PORT}!`);
});
