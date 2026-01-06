import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Connect DB
connectDB();

// Core middleware
app.use(express.json());
app.use(rateLimiter);

// CORS (dev only)
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5180",
    })
  );
}

// API routes
app.use("/api/notes", notesRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../../frontend/dist/index.html")
      );
    });
  }
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
