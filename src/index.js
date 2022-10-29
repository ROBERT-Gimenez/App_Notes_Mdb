const  express = require("express");
const { engine } = require('express-handlebars');
const db = require('./database') 
const indexRouter = require('./routes/indexRoutes');
const path = require('path');
const morgan = require('morgan');
const {PORT} = require('./config')


const app = express()
/* confg */
app.set('views' , path.join(__dirname, 'views'));
app.engine(".hbs" , engine({

    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main',
    extname:".hbs",
}));
app.set("view engine" , ".hbs");



/* middlewares */
app.use(morgan('dev'));//imprime por consola las peticiones de url
app.use(express.urlencoded({ extended : false}));//

/* routes */
app.use(indexRouter);


app.listen(PORT||3000);
console.log("server on port" , PORT||3000);