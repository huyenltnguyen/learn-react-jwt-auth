import express from 'express';
import { signupAuth, signinAuth } from '../controllers/authentication';
import passport from 'passport';
import passportService from '../services/passport';

// TODO: figure out how to make connect-flash work
// TODO: implement refresh token

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false, failWithError: true });

router.get('/token', requireAuth, (req, res) => {
  // this function is called only if the accessToken is valid
  // (http://www.passportjs.org/docs/authenticate/)
  res.json({
    message: 'Token is valid'
  });
});

// handle failed Passport.js authentication without a custom callback
// REF: https://stackoverflow.com/questions/15388206/sending-back-a-json-response-when-failing-passport-js-authentication
// REF: https://github.com/jaredhanson/passport/issues/126#issuecomment-32333163
router.post('/signin', requireSignin, signinAuth, (err, req, res, next) => {
  return res.json({ message: 'Invalid email or password.' });
});

router.post('/signup', signupAuth);

export default router;
