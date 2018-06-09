import passport from 'passport';
import passportJwt from 'passport-jwt';
import User from '../models/user';
import config from '../config';
import LocalStrategy from 'passport-local';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

// Create local strategy
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify the email and password
  // If it's the correct combination, pass it to 'done'
  // Otherwise, call 'done' with false
  User.findOne({ email }, (err, foundUser) => {
    if (err) { return done(err); }
    if (!foundUser) { return done(null, false); }

    // Compare password - check if password (the argument)
    // is equal to user.password
    foundUser.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err, false); }
      if (!isMatch) { return done(null, false); }

      return done(null, foundUser);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // Check if the user ID in the payload exists in the DB
  // If it does, call 'done' with the user object
  // Otherwise, call 'done without a user object

  User.findById(payload.sub, (err, foundUser) => {
    if (err) { return done(err, false); }  // if the search fails to run
    if (!foundUser) { return done(null, false); }  // if the search runs successfully but user not found

    return done(null, foundUser);
  });
});

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
