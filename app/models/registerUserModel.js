const sequelize = require('../../db/connection');

module.exports.userRegister = async (newUser) => {
    try {     
        let result = await sequelize.query(`INSERT INTO users (user_name,
            user_profile_image,
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
            'AQUI VA LA IMAGEN',
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
            GETDATE())`);
            return result;
    } catch (error) {
        return "error";
    }
}

module.exports.userAlreadyExists = async (newUser) => {
    try {     
        let result = await sequelize.query(`SELECT * FROM users WHERE user_email = '${newUser.email}'`);
        return result;
    } catch (error) {
        return "error";
    }
}