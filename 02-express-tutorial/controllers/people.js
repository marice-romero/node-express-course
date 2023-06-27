let { people } = require("../data.js");

function getPeople(req, res) {
  res.json(people);
}

function addPerson(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }
  people.push({ id: people.length, name: req.body.name });
  res.status(201).json({ success: true, name: req.body.name });
}

function getPersonByID(req, res) {
  const { id } = req.params;

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "That person was not found." });
  }
  return res.status(200).json(person);
}

function updatePerson(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const idToFind = parseInt(id);
  const person = people.find((p) => p.id === idToFind);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "That person was not found." });
  }
  const newPeople = people.map((person) => {
    if (person.id === idToFind) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
}

function deletePerson(req, res) {
  const { id } = req.params;

  const idToFind = parseInt(id);
  const person = people.find((p) => p.id === idToFind);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "That person was not found." });
  }
  const newPeople = people.filter((person) => person.id !== idToFind);
  return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
  getPeople,
  addPerson,
  getPersonByID,
  updatePerson,
  deletePerson,
};
