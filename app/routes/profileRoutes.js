const middLogin = require('../../middlewares/loginMidd'); 
const middFriend = require('../../middlewares/friendsMidd'); 
const profileController = require('../controllers/profileController');



module.exports = (app) => {

    app.get('/profile',middLogin.userAuth, async (req, res) => {
        let user_id = req.cookies.user_id;
        console.log("Datos que tiene la vista del perfil ", user_id);
        let result = await profileController.userDataProfile(user_id);

        console.log("Resultado para el usuario --> ", result);
        res.render('profile',{
            profile:result
        });

    });
    app.post('/searchUsers',middLogin.userAuth, async (req, res) => {
        console.log("Se buscará el usuario: ", req.body.search_user);
        let id_user = req.cookies.user_id;
        let result = await profileController.searchUsers(req.body.search_user, id_user);

        console.log("Resultado para el usuario --> ", result);
        res.render('members',{
            members:result
        });

    });
    app.get('/addFriend/:id',middLogin.userAuth, middFriend.validateFriend, async (req, res) => {
        
        let id_new_friend = req.params.id;
        let user_id = req.cookies.user_id;
        let resultProfile = await profileController.userDataProfile(user_id);

        console.log("El usuario: ",id_new_friend," Se hara amigo de ", user_id);
        try {
            
        let result = await profileController.addFriend(user_id,id_new_friend);

        console.log("Resultado para el usuario --> ", result);
        res.render('members',{
            members:['','','','','','','',''],
            alert:true,
            alertTitle: "Agregado ",
            alertIcon: "succes",
            alertMessage: "El usuario recibió tu solicitud de amistad",
            showConfirmButton: false,
            timer: 2000,
            ruta:'profile',
            profile:resultProfile
        });

        } catch (error) {
            
        }

    });
    app.get('/friends',middLogin.userAuth, async (req, res) => {
        
        try {
            let user_id = req.cookies.user_id;
            let frnds = await profileController.getUserFriends(user_id);
            //console.log("Resultado FRIENDS --> ", frnds,frnds[0][0].user_id_friend);
            if (frnds[0].length <= 0) {
                res.render('friends',{
                    friends:['','','','',''],
                    alert:true,
                    alertTitle: "Ooooops !!! ",
                    alertIcon: "alert",
                    alertMessage: "Aun no tienes amigos, prueba buscar y agregar a uno",
                    showConfirmButton: true,
                    timer: '',
                    ruta:'profile',
                });
            } else {
                let arrFriends =[];
                for(let i=0; i<frnds[0].length; i++){
                    arrFriends.push(frnds[0][i].user_id_friend);
                }
                console.log( "Array de amigos  ",arrFriends);
                let convertedArrFrnds = profileController.convertedArr(arrFriends); 
    
                let result = await profileController.userFriends(convertedArrFrnds);
    
                console.log("Resultado para el usuario --> ", result);
                res.render('friends',{
                    friends:result
                });
                    
            }
                
        } catch (error) {
            return console.log("error aqui --> ", error);    
        }

        

    });
    app.get('/profileFriend/:id',middLogin.userAuth, async (req, res) => {
       
        let result = await profileController.userDataProfile(req.params.id);

        console.log("Resultado para el usuario --> ", result);
        res.render('profileFriend',{
            profileFriend:result
        });

    });
}