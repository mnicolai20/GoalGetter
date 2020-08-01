var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
passport.use("local", new LocalStrategy(
  // Our user will sign in using an username, rather than a "username"
   function(username, password, done) {
    console.log("localStrategy has started")
    console.log(username)
    // When a user tries to sign in this code runs
    db.User.findOne({
        username: username
    }).then(function(dbUser) {
      console.log(dbUser)
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      else {
        bcrypt.compare(password, dbUser.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
              return done(null, dbUser);
          } else {
              return done(null, false, { message: 'Wrong password' });
          }
      });
          //  need to create else statement for situation where user is already logged in
           
         
        }
      }
    )
    }));
      // If there is a user with the given username, but the password the user gives us is incorrect
      // else if (!await bcrypt.compare(password, dbUser.password)) {
      //   return done(null, false, {
      //     message: "Incorrect password."
      //   });
      // }
      // If none of the above, return the user
    

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
