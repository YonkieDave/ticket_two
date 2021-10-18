const profileDB = require('../models/profileModel');

module.exports.userDataProfile = async (usr_id) => {
    try {
        let result = await profileDB.userDataProfile(usr_id);
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}
module.exports.searchUsers = async (usr) => {
    try {
        let result = await profileDB.searchUsers(usr);
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}
module.exports.addFriend = async (usr, newUser) => {
    try {
        let result = await profileDB.addFriend(usr,newUser);
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}
module.exports.getUserFriends = async (id) => {
    try {
        let friends = await profileDB.getUserFriends(id);
        return friends;

    } catch (err) {
        throw new Error('DB Error')
    }
}

module.exports.userFriends = async (arr) => {
    try {
        let arrFriends =[];
        for(let i=0; friends[0].length; i++){
            arrFriends.push(arr[0][i].user_id_friend);
        }
        console.log( "Array de amigos  ",arr);
        let result = await profileDB.userFriends(arrFriends);
        console.log("Resultado de amigos ", result)
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}

