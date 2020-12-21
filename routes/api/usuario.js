// se trae el router de express
const router = require('express').Router();
// se trae el usuario del modelo
const models = require('../../models');
//se conecta con el controllador
const userController = require('../../controllers/UsuarioController.js');
//Para usar bcrypt
const bcrypt = require('bcryptjs');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//listar - registrar y actualizar // llamado al middleware
router.get('/list',  userController.list);
router.post('/register',  userController.register);
router.put('/update',  userController.update);

//autenticar
router.post('/login',userController.login);



module.exports = router;