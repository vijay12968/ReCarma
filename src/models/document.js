const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true
    },
    type: {
      type: String,
      enum: ["RC", "AADHAAR", "PAN"],
      required: true
    },
    filePath: {
      type: String,
      required: true
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
