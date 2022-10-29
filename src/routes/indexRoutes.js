const {Router} = require('express');
const Task = require('../models/Task');
const taskcontroller = require('../controllers/taskController')

const router = Router();

//go to de homepage
router.get('/' , taskcontroller.index);
// add task
router.post('/tasks/add' , taskcontroller.addTask);
// get task
router.get('/edit/:id' , taskcontroller.getEdit);
// info task 
router.post('/edit/:id' , taskcontroller.postEdit);
// update task using POST 
router.get('/delete/:id' ,taskcontroller.delete);
// toggle task done
router.get('/toggleDone/:id' , taskcontroller.toggleDone);

module.exports = router;