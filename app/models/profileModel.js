const sequelize = require('../../db/connection');

module.exports.userDataProfile = async (id) => {
    try {
        /*let result = await sequelize.query(`SELECT * FROM users u 
                                            JOIN user_images ui ON u.user_id = ui.user_id 
                                            WHERE u.user_id = '${id}' `)*/
        let result = await sequelize.query(`SELECT * FROM users WHERE user_id = ${id} `)
        return result
    } catch (err) {
        throw new Error(err)
    }
}
module.exports.searchUsers = async (usr,id) => {
    try {
       
        let result = await sequelize.query(`SELECT * FROM users WHERE (user_name LIKE '%${usr}%' 
                                            OR user_paternal LIKE '%${usr}%' OR user_maternal LIKE '%${usr}%')
                                            AND user_id NOT IN(${id})`)
        return result;
    } catch (err) {
        throw new Error(err)
    }
}
module.exports.addFriend = async (id,idFriend) => {
    console.log("En el modelo para agregar usuarios ",id," ",idFriend )
    try {
        let result = await sequelize.query(
         `INSERT INTO user_friends
         (user_id,
         user_id_friend,
         status,
         create_date,
         update_date) VALUES
             (${id},
             ${idFriend},
             'PENDING',
             GETDATE(),
             GETDATE())`);
             return result;
    
    } catch (error) {
        return error;
    }
}

module.exports.friendsValidate = async (usr,frn) => {
    try {
       
        let result = await sequelize.query(`SELECT status FROM user_friends WHERE user_id = ${usr} 
                                            AND user_id_friend = ${frn}`);                                     
        return result;
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.getUserFriends = async (id) => {
    try {
       
        let result = await sequelize.query(`SELECT uf.user_id_friend FROM users u
                                            JOIN user_friends uf
                                            ON u.user_id = uf.user_id     
                                            WHERE uf.user_id  = ${id}
                                            GROUP BY uf.user_id_friend `);                                
          /*  let result = await sequelize.query(`SELECT * FROM users `);
                                            return result;*/
                                            return result;
    } catch  {
       return "Error";
    }
}
module.exports.userFriends = async (frns) => {
    try {
       
        /*let result = await sequelize.query(`SELECT u.user_id,u.user_name,u.user_paternal,u.user_maternal,u.user_studies,u.user_email,status,uf.status
                                            FROM users u JOIN user_friends uf ON u.user_id = uf.user_id 
                                            WHERE u.user_id  IN(${frns})`);     */
        let result = await sequelize.query(`SELECT user_id,user_name,user_paternal,user_maternal,user_studies,user_email
        FROM users WHERE user_id  IN(${frns})`);                                                                      
        return result;
    } catch (err) {
        throw new Error(err)
    }
}