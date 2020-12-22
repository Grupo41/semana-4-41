// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const categoriaController = require('../../controllers/CategoriaController.js');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth')

//listar, agregar, actualizar, activar y desactivar categoria
router.get('/list', auth.verificarAlmacenero, categoriaController.list); //.com/api/categoria/list
router.post('/add', auth.verificarAlmacenero, categoriaController.add); //.com/api/categoria/add
router.put('/update', auth.verificarAlmacenero, categoriaController.update); //.com/api/categoria/update
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate); //.com/api/categoria/activate
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate); //.com/api/categoria/deactivate


module.exports = router;