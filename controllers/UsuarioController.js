const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenService = require('../services/token');

exports.login = async(req, res, next) =>{
    try{
        const usuario = await models.Usuario.findOne({where:{email: req.body.email}})
        if (usuario) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, usuario.password);
            if (passwordIsValid) {
                const token = await tokenService.encode(usuario); 
               // const token = token.encode(Usuario) 
                    res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    //tokenReturn: token,
                    user: usuario
                })
            } else {
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        } else {
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->' 
        })
        next(error);
    }
};

exports.register = async (req, res, next)=>{
    try {
        const usuario = await models.Usuario.findOne({where: {email: req.body.email}});
        if (usuario){
            res.status(400).send({
                message: 'Sorry you request hast a conflict with our system state, maybe the email is already in use'
            })
        }else {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const usuario = await models.Usuario.create (req.body);
            res.status(200).json(usuario);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.list = async(req, res, next)=>{
    try {
        const usuario = await models.Usuario.findAll();
        if (usuario){
            res.status(200).json(usuario);
        }else {
            res.status(404).send({
                message: 'There is not user in the system'
            })
        }
    }catch (error){
        res.status(500).send({
            message: 'Error!!'
        })
        next (error);
    }
};

exports.update = async (req, res, next)=>{
    try {
        const usuario = await models.Usuario.findOne({where: {email: req.body.email}});
        if (usuario){
            const usuario = await models.Usuario.update({nombre: req.body.nombre},
                {
                where: {
                    email: req.body.email
                },
                //returning: true
                });
                res.status(200).json(usuario);
        }else{
            res.status(404).send({
                message: 'User nof found.'
            })
        }
    }catch (error){
        res.status(500).send({
            message: 'Error.'
        });
    }
};

exports.activate = async (req, res, next) => {
    try {
        const usuario = await models.Usuario.update({estado: 1},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(usuario);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};

exports.deactivate = async (req, res, next) => {
    try {
        const usuario = await models.Usuario.update({estado: 0},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(usuario);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};