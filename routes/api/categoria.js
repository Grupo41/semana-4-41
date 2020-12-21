// se trae el router de express
const router = require('express').Router();
// se trae el usuario del modelo
const models = require('../../models');
//se conecta con el controllador
const categoriaController = require('../../controllers/CategoriaController.js');
//Para usar bcrypt
const bcrypt = require('bcryptjs');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//listar - registrar y actualizar // llamado al middleware
router.get('/list', auth.verifyUsuario, categoriaController.list);
router.post('/add', auth.verifyUsuario, categoriaController.add);
router.put('/update', auth.verifyUsuario, categoriaController.update);
router.put('/activate', auth.verifyUsuario, categoriaController.activate);
router.put('/deactivate', auth.verifyUsuario, categoriaController.deactivate);

//autenticar
//router.post('/login',userController.login);

module.exports = router;