const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  getPersonByID,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:id", getPersonByID);

router.post("/", addPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
