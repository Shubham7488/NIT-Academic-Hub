// backend/config/passport.js

const passport        = require("passport");
const GoogleStrategy  = require("passport-google-oauth20").Strategy;
const User            = require("../models/user");   // ← lowercase, matches user.js

passport.use(
  new GoogleStrategy(
    {
      clientID:     process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:  "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if a user already exists with this Google ID
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If not, create a new user record
          user = new User({
            name:     profile.displayName,
            email:    profile.emails[0].value,
            googleId: profile.id,
          });
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        console.error("Google OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

// Serialize user ID into the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user by ID from the session
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err  => done(err, null));
});

module.exports = passport;
