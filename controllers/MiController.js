const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenServices = require('../services/token');

exports.login = async(req, res, next) =>{
    try{
        const user = await models.Usuario.findOne({where:{email: req.body.email}})
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {

                const token = await tokenServices.encode(user);
                res.status(200).json({ user, tokenReturn
                    //auth: true,
                    //tokenReturn: token,
                    //tokenReturn: token,
                    //user: user
                });
            } else {
                res.status(401).json({
                    auth: false,
                    tokenReturn: null,
                    reason: 'Invalid Password!'
                });
            }
        } else {
            res.status(404).json({
                error: 'User not found'
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

exports.register = async (req,res,next)=>{
    try {
        const user = await models.Usuario.findOne({where: {email:req.body.email}});
        if(user){
            res.status(409).send({
                message: 'Sorry your request has a conflict with our System state, maybe the email is already in use'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password,10);
            const user = await models.Usuario.create(req.body);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error-->'
        })
        next(error);
    }
};
exports.list = async (req,res,next)=>{
    try {
        const user = await models.Usuario.findAll();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send({
                message: 'There is not user in the system'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error-->'
        })
        next(error);
    }
};
exports.update = async (req,res, next) =>{
    try {
        const user = await models.Usuario.findOne({where: {email:req.body.email}});
        if(user){
            const user = await models.Usuario.update({name: req.body.name},
                {
                    where: {
                        email:req.body.email
                    },
                    //returning: true
                });
                res.status(200).json(user);
       
        } else{
            res.status(404).send({
                message: 'User not found.'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error.'
        })
        next(error);
    }
};