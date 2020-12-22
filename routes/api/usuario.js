// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const userController = require('../../controllers/UsuarioController.js');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//login de usuario para cualquier rol
router.post('/login',userController.login); //.com/api/usuario/signin

//listar, registrar, actualizar, activate y deactivate
router.get('/list', auth.verificarAdministrador, userController.list); //.com/api/usuario/list
router.post('/add', auth.verificarAdministrador, userController.register); //.com/api/usuario/add
router.put('/update', auth.verificarAdministrador, userController.update); //.com/api/usuario/update
router.put('/activate', auth.verificarAdministrador, userController.activate); //.com/api/usuario/activate
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate); //.com/api/usuario/deactivate


module.exports = router;