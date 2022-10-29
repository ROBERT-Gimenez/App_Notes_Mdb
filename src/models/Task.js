const {Schema , model} = require('mongoose');

let taskSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true},
    description:{
        type:String,
        required:true,},
    done:{
        type:Boolean,
        default:false
    },

},{
    timestamps: true,
    versionKey: false
});


let m = model("Task" , taskSchema);
module.exports = m; 
