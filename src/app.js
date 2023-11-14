const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//import routes
const customerRoutes = require('./routes/customer')

// Settings

app.set('port', process.env.PORT||3000)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares funciones que se ejecutan antes  de las peticiones de los usuarios
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudenodejsmysql'
}, 'single'));

//cuando recibamos los datos los recibiremos dentro del obj request
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

//statics files
app.use(express.static(path.join(__dirname, 'public')));

//empezando el servidor

app.listen(app.get('port'), ()=>{
    console.log('Server on port');
});