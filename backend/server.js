// server.js

const express       = require("express");
const mongoose      = require("mongoose");
const cors          = require("cors");
const passport      = require("passport");
const session       = require("express-session");
require("dotenv").config();

// Passport config (Google OAuth, etc.)
require("./config/passport");

// Routes
const authRoutes = require("./routes/auth");

const app = express();

// Load the allowed frontend origin from env (fall back to localhost for dev)
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// ✅ CORS middleware
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  })
);

// ✅ JSON body parsing
app.use(express.json());

// ✅ Session middleware (required for passport.js)
app.use(
  session({
    secret: process.env.SESSION_SECRET,  // must be set in your env
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",     // HTTPS-only in prod
      httpOnly: true,                                    // not accessible to JS
      sameSite:
        process.env.NODE_ENV === "production" ? "none" : "lax", 
    },
  })
);

// ✅ Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// ✅ API Routes
app.use("/api/auth", authRoutes);

// ✅ Root route (health check)
app.get("/", (_req, res) => {
  res.send("✅ Backend is running 🚀");
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    // these options are defaults in newer drivers, but safe to include
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
