// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const categoriaController = require('../../controllers/CategoriaController');
//Middlewares
const auth = require('../../middlewares/auth');



//api/usuario/list
router.get('/list',auth.verificarAlmacenero, categoriaController.list);

//.com/api/usuario/register
router.post('/add', auth.verificarAlmacenero, categoriaController.add);

//.com/api/usuario/update
router.put('/update',auth.verificarAlmacenero, categoriaController.update);

//.com/api/usuario/activate
router.put('/activate',auth.verificarAlmacenero, categoriaController.activate);

//.com/api/usuario/deactivate
router.put('/deactivate',auth.verificarAlmacenero, categoriaController.deactivate);


module.exports = router;