const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    make: String,
    model: String,
    year: Number,
    conditionScore: Number,
    valuationPrice: Number,
    status: {
      type: String,
      enum: [
        "CREATED",
        "PICKUP_SCHEDULED",
        "IN_TRANSIT",
        "RECEIVED",
        "DISMANTLED",
        "COD_ISSUED"
      ],
      default: "CREATED"
    },
    statusHistory: [
      {
        status: String,
        timestamp: Date
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
