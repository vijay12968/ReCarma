const Document = require("../models/document");
const Vehicle = require("../models/vehicle");

exports.uploadDocument = async (req, res) => {
  const { vehicleId, type } = req.body;

  const vehicle = await Vehicle.findById(vehicleId);
  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  const document = await Document.create({
    vehicle: vehicleId,
    type,
    filePath: req.file.path,
    uploadedBy: req.user._id
  });

  res.status(201).json(document);
};
