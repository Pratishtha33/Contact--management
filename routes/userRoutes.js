const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController").default;
const validateToken = require("../middleware/validateTokenHandler").default;

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
