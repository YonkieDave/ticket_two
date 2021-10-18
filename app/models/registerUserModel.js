const sequelize = require('../../db/connection');

module.exports.userRegister = async (newUser) => {
    try {     
        let result = await sequelize.query(`INSERT INTO users (user_name,
            user_paternal,
            user_maternal,
            user_email,
            user_pass,
            user_gender,
            user_marital_status,
            user_city,
            user_age,
            user_studies,
            user_lenguajes,
            user_linkedin,
            user_hobbies,
            user_about,
            create_date ,
            update_date) VALUES
            ('${newUser.name}',
            '${newUser.lastname_paternal}',
            '${newUser.lastname_maternal}',
            '${newUser.email}',
            '${newUser.password}',
            '${newUser.gender}',
            '${newUser.marital}',
            '${newUser.city}',
            ${newUser.age},
            '${newUser.studies}',
            '${newUser.languages}',
            '${newUser.linkedin}',
            '${newUser.hobbies}',
            '${newUser.about}',
            GETDATE(),
            GETDATE());`);
            
            return await result;
    } catch (error) {
        return "error";
    }
}
module.exports.getUserId = async (email) => {
    let idNewUser = await sequelize.query(`SELECT user_id FROM users WHERE user_email = '${email.user_email}'`);
    return  idNewUser; 
}

module.exports.userRegisterImage = async (id,image) => {
   try {
    let result = sequelize.query(
        `INSERT INTO user_images (user_id, 
            image_name,
            image_content,
            image_extention,
            create_date,
            update_date) VALUES
            ('${id}',
            '${image}',
            '${image}',
            '${image}',
            GETDATE(),
            GETDATE())`);
            return result;
   
   } catch (error) {
       return error;
   }}

module.exports.userAlreadyExists = async (newUser) => {
    try {     
        let result = await sequelize.query(`SELECT * FROM users WHERE user_email = '${newUser.email}'`);
        return result;
    } catch (error) {
        return "error";
    }
}