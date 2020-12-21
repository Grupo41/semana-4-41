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
    const Usuario = await models.Usuario.findOne({where:{
        id: localID,
        estado: 1
    }});
    if(Usuario){
        const token = encode (Usuario);
        return {
            token,
            rol: Usuario.rol
        }
    }else{
        return false
    }
};

module.exports = {
    encode: async (Usuario) => {
        const token = jwt.sign({
            id: Usuario.id,
            name: Usuario.name,
            email: Usuario.email,
            rol: Usuario.rol,
            status: Usuario.estado
        }, 'config.secret', {
            expiresIn: 86400,
        }
        );
        return token;
    },
    decode: async (token) => {
        try {
            const { id } = await jwt.verify(token, 'config.secret')
            const Usuario = await models.Usuario.findOne({where: {
                id: id,
                estado: 1
            }});
            if(Usuario){
                return Usuario;
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