const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect("mongodb+srv://dbGoals:Goals@cluster0.scopj.mongodb.net/dbGoals?retryWrites=true&w=majority");

app.listen(PORT, function () {
    console.log(`We Did it  ==> API Server now listening on PORT ${PORT}!`);
});
