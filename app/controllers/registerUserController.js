const registerDB = require('../models/registerUserModel');

module.exports.userRegister = async (newUser) => {
    try {
        let result = await registerDB.userRegister(newUser);
        return result;
    } catch (err) {
        throw new Error('DB Error')
    }
}