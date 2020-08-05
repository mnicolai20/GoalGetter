const router = require("express").Router();
const goalsRoutes = require("./Goals");

// Book routes
router.use("/goals", goalsRoutes);

module.exports = router;
