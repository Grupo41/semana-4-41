const jwt = require('jsonwebtoken');
const models = require('../models');

 
const checkToken = async (token) =>{
    //validar rol desde el token
    let localID = null;
    try {
        const { id } = token.decode (token);
        localID = id;
    } catch (error) {
        
    }
    const usuario = await models.Usuario.findOne({where:{
        id: localID,
        estado: 1
    }});
    if(usuario){
        const token = encode (usuario);
        return {
            token,
            rol: usuario.rol
        }
    }else{
        return false
    }
};

module.exports = {
    encode: async (usuario) => {
        const token = jwt.sign({
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
            rol: usuario.rol,
            status: usuario.estado
        }, 'config.secret', {
            expiresIn: 86400,
        }
        );
        return token;
    },
    decode: async (token) => {
        try {
            const { id } = jwt.verify(token, 'config.secret')
            const usuario = await models.Usuario.findOne({where: {
                id: id,
                estado: 1
            }});
            if(usuario){
                return usuario;
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