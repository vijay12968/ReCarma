const express = require("express");
const {
  createVehicle,
  getMyVehicles,
  updateStatus
} = require("../controllers/vehicle.controller");

const { protect } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

const router = express.Router();

router.post("/", protect, createVehicle);
router.get("/my", protect, getMyVehicles);
router.patch(
  "/:id/status",
  protect,
  authorize("ADMIN", "DEALER"),
  updateStatus
);

module.exports = router;
