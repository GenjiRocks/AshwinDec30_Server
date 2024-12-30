const db = require("../db");

//post get put delete

//get all students
exports.getAllStudents = async (req, res) => {
  try {
    const [students] = await db.query("SELECT * from students");
    res.status(200).send(students);
  } catch (err) {
    res.status(409).send({ message: err.message });
  }
};

//get student by id
exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const [student] = await db.query("SELECT * from students WHERE id = ?", [
      id,
    ]);
    res.status(200).send(student[0]);
  } catch (err) {
    res.status(409).send({ message: err.message });
  }
};

//update a student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);
    console.log(req.body);
    console.log(`updated student ID ${id}`);

    const { firstName, lastName, course, email, dateOfBirth } = req.body;
    console.log(req.file);

    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    //   console.log(req);
    }
    const [student] = await db.query(
      "UPDATE students SET firstName = ?, lastName = ?, course = ?, email = ?, imageUrl = ?, dateOfBirth = ? WHERE id = ?",
      [firstName, lastName, course, email, imageUrl, dateOfBirth, id]
    );
    res.status(200).send(student);
  } catch (err) {
    res.status(409).send({ message: err.message });
  }
};

//add a student
exports.addStudent = async (req, res) => {
  console.log("test add student");

  const { firstName, lastName, course, email, dateOfBirth } = req.body;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }
  console.log(imageUrl);

  try {
    const [student] = await db.query(
      "INSERT INTO students (firstName,lastName,course,email,imageUrl,dateOfBirth) values (?,?,?,?,?,?)",
      [firstName, lastName, course, email, imageUrl, dateOfBirth]
    );
    res.status(200).send(student);
  } catch (err) {
    res.status(409).send({ message: err.message });
  }
};

//delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const [student] = await db.query("DELETE FROM students where id = ?", [id]);
    res.status(200).send(student);
  } catch (err) {
    res.status(409).send({ message: err.message });
  }
};
