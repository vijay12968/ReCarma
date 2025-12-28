const express = require("express");
const upload = require("../config/multer");
const { uploadDocument } = require("../controllers/document.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("document"),
  uploadDocument
);

module.exports = router;
