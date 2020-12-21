// se trae el router de express
const router = require('express').Router();
// se trae el usuario del modelo
const models = require('../../models');
//se conecta con el controllador
const articuloController = require('../../controllers/ArticuloController');
//Para usar bcrypt
const bcrypt = require('bcryptjs');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//listar - registrar y actualizar // llamado al middleware
router.get('/list', auth.verificarVendedor, articuloController.list);
router.post('/add', auth.verificarVendedor, articuloController.add);
router.put('/update', auth.verificarVendedor, articuloController.update);
router.put('/activate', auth.verificarVendedor, articuloController.activate);
router.put('/deactivate', auth.verificarVendedor, articuloController.deactivate);

//autenticar
//router.post('/login',userController.login);



module.exports = router;