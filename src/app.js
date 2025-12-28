const express = require("express");
const cors = require("cors");
require("dotenv").config();

const errorHandler = require("./middlewares/error.middleware");
const authRoutes = require("./routes/auth.routes");
const vehicleRoutes = require("./routes/vehicle.routes");
const pickupRoutes = require("./routes/pickup.routes");
const documentRoutes = require("./routes/document.routes");

const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/pickups", pickupRoutes);
app.use("/api/documents", documentRoutes);
app.use(errorHandler);



app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
});

module.exports = app;
