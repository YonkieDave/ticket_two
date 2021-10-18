const registerController = require('../controllers/registerUserController');
const registerMidd = require('../../middlewares/registerMidd');


module.exports = (app) => {

    app.get('/register', (req, res) =>{
        res.render('registerUser');
    })

    app.post('/register',registerMidd.validateUserRegister, registerMidd.userAlreadyExists, async (req, res) =>{
        console.log("Datos en el post de registro: ", req.body);

        try {
            let result = await registerController.userRegister(req.body);
            console.log("Respuesta del insert --> ", result);
            res.render('registerUser',{
                alert:true,
                alertTitle: "REGISTRADO ",
                alertIcon: "succes",
                alertMessage: "Usuario registrado con éxito",
                showConfirmButton: false,
                timer: 1000,
                ruta:'login',
             });   
        } catch (error) {
            
        }
          
    })
}