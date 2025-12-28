const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongo invalid ObjectId
  if (err.name === "CastError") {
    error = new AppError("Invalid ID format", 400);
  }

  // Mongo duplicate key
  if (err.code === 11000) {
    error = new AppError("Duplicate field value entered", 400);
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    error = new AppError("Invalid token", 401);
  }

  if (err.name === "TokenExpiredError") {
    error = new AppError("Token expired", 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error"
  });
};

module.exports = errorHandler;
