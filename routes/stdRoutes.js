const express = require('express');
const { getAllStudents, addStudent, updateStudent, deleteStudent, getStudentById } = require('../controller/stdController');
const router = express.Router()
const upload = require('../middleware/imgMulter')

//get all students.
router.get('/',getAllStudents)

//add student
router.post('/add',upload.single('image'),addStudent)

//update student
router.put('/update/:id',upload.single('image'),updateStudent)

//delete a student
router.delete('/delete/:id',deleteStudent)

//student by id
router.get('/getstudent/:id',getStudentById)


module.exports = router;