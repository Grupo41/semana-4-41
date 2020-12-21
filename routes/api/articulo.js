/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
// se trae el usuario del modelo
const models = require('../../models');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');
const bcrypt = require('bcryptjs');

const router = routerx();

router.get('/list',  articuloController.list);
router.post('/add', auth.verificarVendedor, articuloController.add);
router.put('/update', auth.verificarVendedor, articuloController.update);
router.put('/activate', auth.verificarVendedor, articuloController.activate);
router.put('/deactivate', auth.verificarVendedor, articuloController.deactivate);

module.exports = router;