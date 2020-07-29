const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');

const routes = require("./routes/authRoutes");

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
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',routes);

mongoose.connect("mongodb+srv://dbGoals:Goals@cluster0.scopj.mongodb.net/dbGoals?retryWrites=true&w=majority");

app.listen(PORT, function () {
    console.log(`We Did it  ==> API Server now listening on PORT ${PORT}!`);
});
