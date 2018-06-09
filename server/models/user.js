import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On save hook, encrypt the password
userSchema.pre('save', function(next) {
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    // hash password using the salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }

      // overwrite plain text password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    return callback(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

export default User;
