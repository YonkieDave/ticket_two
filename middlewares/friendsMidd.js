const dbProfile = require('../app/models/profileModel');
const profileController = require('../app/controllers/profileController');


module.exports.validateFriend = async (req, res, next) => {
    console.log("Dentro del MIDDLEWARE de perfil")
    let user_id = req.cookies.user_id;
    let friend_id = req.params.id;
    let resultProfile = await profileController.userDataProfile(user_id);
    try {
        let result = await dbProfile.friendsValidate(user_id,friend_id);
        console.log("Resultado de la consulta para validar la amistad ---> ",result )
        if (result[0].length <= 0) {
            console.log("Es posible mandar solicitud al amigo");
             return next();  
        } else{
            if (result[0][0].status == 'PENDING') {
                return(res.render('members',{
                    members:['','','','',''],
                    alert:true,
                    alertTitle: "Advertencia",
                    alertMessage: "El usuario ya tiene una solicitud de amistad pendiente",
                    alertIcon: 'info',
                    showConfirmButton:true,
                    timer: '',
                    ruta: 'profile'
                }));
                
            }else{
                if (result[0][0].status == 'APROVED') {
                    return(res.render('members',{
                        members:['','','','',''],
                        alert:true,
                        alertTitle: "Advertencia",
                        alertMessage: "Ya existe una amistad con este usuario",
                        alertIcon: 'info',
                        showConfirmButton:true,
                        timer: '',
                        ruta: 'profile'
                        
        
                    }));
                }else{
                
                    return next();
                }
            }
        }    
    } catch (error) {
     return error;   
    }
}
    