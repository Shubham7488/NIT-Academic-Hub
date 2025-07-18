const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

// ✅ Import controller
const authController = require("../controllers/authController");

// ✅ Local Authentication
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// ✅ Google Login via JWT decoded token (used in frontend)
router.post("/google-login", authController.googleLogin);

// ✅ Start Google OAuth flow (redirect-based login)
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// ✅ Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send token to frontend
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);

// ✅ Logout
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("http://localhost:5173");
  });
});

module.exports = router;
