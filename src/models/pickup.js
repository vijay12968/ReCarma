const mongoose = require("mongoose");

const pickupSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true
    },
    pickupDate: {
      type: Date,
      required: true
    },
    slot: {
      type: String,
      enum: ["MORNING", "AFTERNOON", "EVENING"],
      required: true
    },
    assignedRVSF: {
      type: String,
      default: "Nearest RVSF"
    },
    status: {
      type: String,
      enum: ["SCHEDULED", "COMPLETED", "CANCELLED"],
      default: "SCHEDULED"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pickup", pickupSchema);
