const dbUserRegister = require('../app/models/registerUserModel');


module.exports.validateUserRegister = (req, res, next) => {
console.log("Datos del usuario ", req.body);
try {
    if( req.body.name != ''
    && req.body.lastname_paternal != ''
    && req.body.lastname_maternal != ''
    && req.body.email != ''
    && req.body.password != ''
    && req.body.gender != ''
    && req.body.marital != ''
    && req.body.city != ''
    && req.body.age != ''
    && req.body.studies != ''
    && req.body.languages != ''
    && req.body.linkedin != ''
    && req.body.hobbies != ''
    && req.body.about!= ''){ 
        console.log("Todos los campos ingresados")
        return next();
    }else{
            return(res.render('registerUser',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Asegurate de llenar todos los campos por favor",
                alertIcon: 'info',
                showConfirmButton:true,
                timer: '',
                ruta: 'register'

            })
        )
    }
        
} catch (error) {
 return error;   
}
}


module.exports.userAlreadyExists = async (req, res, next) => {   
    let result = await dbUserRegister.userAlreadyExists(req.body);
    if(result[0].length > 0){
        return(res.render('registerUser',{
            alert:true,
            alertTitle: "Advertencia",
            alertMessage: "Ya existe un usuario con ese correo en el sistema",
            alertIcon: 'info',
            showConfirmButton:true,
            timer: '',
            ruta: 'register'})
            )  
    }else{
        return next();
    }
}
