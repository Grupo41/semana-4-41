// /* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
// const routerx = require('express-promise-router');
// const router = routerx();

// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const articuloController = require('../../controllers/ArticuloController');
//llamar middelware, para conectar validacion token
const auth = require('../../middlewares/auth');

//listar, agregar, actualizar, activar y desactivar categoria
router.get('/list', auth.verificarAlmacenero, articuloController.list);
router.post('/add', auth.verificarAlmacenero, articuloController.add);
router.put('/update', auth.verificarAlmacenero, articuloController.update);
router.put('/activate', auth.verificarAlmacenero, articuloController.activate);
router.put('/deactivate', auth.verificarAlmacenero, articuloController.deactivate);

module.exports = router;