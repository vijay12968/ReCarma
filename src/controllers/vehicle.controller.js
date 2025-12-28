const Vehicle = require("../models/vehicle");
const { calculateValuation } = require("../services/valuation.service");

exports.createVehicle = async (req, res) => {
  const { make, model, year, conditionScore } = req.body;

  const valuationPrice = calculateValuation(year, conditionScore);

  const vehicle = await Vehicle.create({
    owner: req.user._id,
    make,
    model,
    year,
    conditionScore,
    valuationPrice,
    statusHistory: [{ status: "CREATED", timestamp: new Date() }]
  });

  res.status(201).json(vehicle);
};

exports.getMyVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({ owner: req.user._id });
  res.json(vehicles);
};

exports.updateStatus = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  vehicle.status = req.body.status;
  vehicle.statusHistory.push({
    status: req.body.status,
    timestamp: new Date()
  });

  await vehicle.save();
  res.json(vehicle);
};
