// se trae el router de express
const router = require('express').Router();
//se conecta con el controllador
const userController = require('../../controllers/MiController.js');
//Middlewares
const auth = require('../../middlewares/auth');



//.com/api/user/signin
router.post('/login',userController.login);

//api/user/list
router.get('/list',auth.verificarAdministrador, userController.list);

//.com/api/user/register
router.post('/register', auth.verificarAdministrador, userController.register);


//.com/api/user/update
router.put('/update',auth.verificarAdministrador, userController.update);


module.exports = router;