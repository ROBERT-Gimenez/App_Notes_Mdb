const {Router} = require('express');
const Task = require('../models/Task');



const router = Router();

router.get('/' , async (req , res) => {
    const tasks = await Task.find().lean()//lean convierte el objeto especial mongo a un objeto standar
    res.render("index" , {tasks:tasks});
});
router.post('/tasks/add' , async (req , res) => {
    try{
        const task = Task(req.body);
        const taskSave = await task.save();
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
});
router.get('/about' , (req , res) => {
    res.render("about")
});

module.exports = router;