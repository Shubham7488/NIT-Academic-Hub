const cors = require("cors");

// Allow frontend to access backend
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
}));
