const registerDB = require('../models/registerUserModel');

module.exports.userRegister = async (newUser) => {
    try {
        let result = await registerDB.userRegister(newUser);
        let id = await registerDB.getUserId(newUser);
        let image = await registerDB.userRegisterImage(id,newUser.image);

        return image;
    } catch (err) {
        throw new Error('DB Error')
    }
}