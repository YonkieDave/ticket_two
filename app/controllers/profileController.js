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
        let result = await profileDB.userFriends(arr);
        console.log("Resultado de amigos ", result)
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}
module.exports.convertedArr = (arr) => {
    arr =`${arr}`;
    
    let id = arr.replace('[', '(')
    id=arr.replace(']', ')')
    console.log("array con parentesis --> ",id);
    return id;
}


