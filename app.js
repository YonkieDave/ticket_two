//express
const express = require('express');
const app = express();

//cookie
const cookieParser = require('cookie-parser');

//Enviroment Variables
require('dotenv').config();

//DB Connection
const sequelize = require('./db/connection');

//Routes
const loginRoutes = require('./app/routes/loginRoutes');
const registerUserRoutes = require('./app/routes/registerUserRoutes');
const profileRoutes = require('./app/routes/profileRoutes');

//urlencode captura los datos del formulario
app.use(express.urlencoded({extended:true}));

//Lenguaje for comunication
app.use(express.json())

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//cookie
app.use(cookieParser());

async function serverStart() {
    try {
      await sequelize.authenticate();
      console.log('Correct conexion');
      app.listen(process.env.SERVER_PORT,  () => {
        console.log(`Sistem start http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
      });
    } catch (error) {
      console.error('DB conexion error:', error);
    }
  }
  
  serverStart();
  
  loginRoutes(app);
  registerUserRoutes(app);
  profileRoutes(app); 