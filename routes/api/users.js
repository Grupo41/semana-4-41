// se trae el router de express
const router = require('express').Router();
// se trae el usuario del modelo
const models = require('../../models');
//se conecta con el controllador
const userController = require('../../controllers/MiController.js');
//Para usar bcrypt
const bcrypt = require('bcryptjs');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//listar - registrar y actualizar // llamado al middleware
router.get('/list', auth.verificarVendedor, userController.list);
router.post('/register', auth.verificarAdministrador, userController.register);
router.put('/update', auth.verificarAdministrador, userController.update);

//autenticar
router.post('/login',userController.login);



module.exports = router;