const {connect} = require('mongoose');
const MONGODB_URI = require('./config')
const mongo = (async () => {
    try{
        console.log("woekrsad")
        const db = await connect(MONGODB_URI);
        console.log("db connect" , db.connection.name)
    } catch (err){
        console.error(err);
    }
})();

module.exports = mongo;