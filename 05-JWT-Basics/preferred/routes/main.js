const express = require("express");
const router = express.Router();

const {
  login,
  dashboard,
  addQuote,
  getQuote,
  updateQuote,
  deleteQuote,
} = require("../controllers/main");

const authMiddleware = require("../middleware/auth");

router
  .route("/dashboard")
  .get(authMiddleware, dashboard)
  .post(authMiddleware, addQuote);
router
  .route("/dashboard/:id")
  .get(authMiddleware, getQuote)
  .patch(authMiddleware, updateQuote)
  .delete(authMiddleware, deleteQuote);
router.route("/login").post(login);

module.exports = router;
