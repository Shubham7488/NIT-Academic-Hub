const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();

// Passport config (Google OAuth, etc.)
require("./config/passport");

// Routes
const authRoutes = require("./routes/auth");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173", // React frontend
  credentials: true
}));
app.use(express.json());

// ✅ Session middleware (required for passport.js)
app.use(session({
  secret: process.env.SESSION_SECRET || "supersecretkey",
  resave: false,
  saveUninitialized: false,
}));

// ✅ Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// ✅ API Routes
app.use("/api/auth", authRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is running 🚀");
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  // The following options are no longer needed but safe to include
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
