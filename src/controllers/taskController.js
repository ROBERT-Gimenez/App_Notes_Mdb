const Task = require('../models/Task');


module.exports = {
    
    index:async (req , res) => {
        const tasks = await Task.find().lean()//lean convierte el objeto especial mongo a un objeto standar
    
        res.render("index" , {tasks:tasks});
        
    },
    addTask: async(req , res) => {
            try{
                const task = Task(req.body);
                const taskSave = await task.save();
                
                res.redirect("/");
            }catch(err){
                console.log(err);
            }
    },
    getEdit:async (req , res) => {
        const id = req.params.id;
        const task = await Task.findById(id).lean();

        res.render("edit" , {task})
    },
    postEdit:async (req , res) => {
        const id = req.params.id;
        await Task.findByIdAndUpdate(id, req.body);

        res.redirect("/");

    },
    delete: async (req , res) => {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);

        res.redirect("/");

    },
    toggleDone: async (req , res) => {
        const id = req.params.id;
        const task = await Task.findById(id);
        task.done = !task.done;

        await task.save();
    
        res.redirect("/");
    }
}    
