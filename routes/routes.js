const express = require('express')

const userController = require('../controllers/userController')
const studentController = require('../controllers/studentController')

const jwtmiddle = require('../middleware/jwtMiddleware')
const multerInstance = require('../middleware/multerMiddleware')

const route = express.Router()

route.post('/reg',userController.userRegistration)
route.post('/log',userController.userLogin)
route.post('/addstudent',jwtmiddle,multerInstance.single('image'),studentController.addStudent)
route.get('/getstudents',jwtmiddle,studentController.getStudents)
route.delete('/dltstudent/:sid',jwtmiddle,studentController.deleteStudent)
route.put('/editstudent/:sid',jwtmiddle,multerInstance.single('image'),studentController.updateStudent)

module.exports = route