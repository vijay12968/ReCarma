const express = require("express");
const {
  schedulePickup,
  getAllPickups
} = require("../controllers/pickup.controller");

const { protect } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

const router = express.Router();

router.post("/", protect, schedulePickup);
router.get("/", protect, authorize("ADMIN"), getAllPickups);

module.exports = router;
