const jwt = require('jsonwebtoken');
const models = require('../models');

 
const checkToken = async (token) =>{
    //validar rol desde el token
    let localID = null;
    try {
        const {id } = token.decode (token);
        localID = id;
    } catch (error) {
        
    }
    const user = await models.Usuario.findOne({where:{
        id: localID,
        estado: 1
    }});
    if(user){
        const token = encode (user);
        return {
            token,
            rol: Usuario.rol
        }
    }else{
        return false
    }
};

module.exports = {
    encode: async (user) => {
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol,
            status: user.estado
        }, 'config.secret', {
            expiresIn: 86400,
        }
        );
        return token;
    },
    decode: async (token) => {
        try {
            const {id} = await jwt.verify(token, 'config.secret')
            const user = await models.Usuario.findOne({where: {
                id: id,
                estado: 1
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        } catch (error) {
            //funcion por si el token vence
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}