const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/User"); // ✅ Make sure this path is correct

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // 🔍 Check if user already exists with googleId
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // ✅ Create a new user without requiring password
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
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

// ✅ Serialize user ID to the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// ✅ Deserialize user from the session
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});
