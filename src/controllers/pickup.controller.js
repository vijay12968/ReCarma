const Pickup = require("../models/pickup");
const Vehicle = require("../models/vehicle");

exports.schedulePickup = async (req, res) => {
  const { vehicleId, pickupDate, slot } = req.body;

  const vehicle = await Vehicle.findById(vehicleId);
  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  const pickup = await Pickup.create({
    vehicle: vehicleId,
    pickupDate,
    slot
  });

  vehicle.status = "PICKUP_SCHEDULED";
  vehicle.statusHistory.push({
    status: "PICKUP_SCHEDULED",
    timestamp: new Date()
  });
  await vehicle.save();

  res.status(201).json(pickup);
};

exports.getAllPickups = async (req, res) => {
  const pickups = await Pickup.find()
    .populate("vehicle")
    .sort({ createdAt: -1 });

  res.json(pickups);
};
