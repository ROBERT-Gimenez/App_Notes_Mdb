const {connect} = require('mongoose');
const MONGODB_URI = require('./config');
const uri = "mongodb://localhost/task"
const mongo = (async () => {
    try{
        console.log("woekrsad")
        const db = await connect(uri);
        console.log("db connect" , db.connection.name)
    } catch (err){
        console.error(err);
    }
})();

module.exports = mongo;