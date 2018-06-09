import express from 'express';
import { signupAuth, signinAuth } from '../controllers/authentication';
import passport from 'passport';
import passportService from '../services/passport';

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/signin', requireSignin, signinAuth);

router.post('/signup', signupAuth);

export default router;
