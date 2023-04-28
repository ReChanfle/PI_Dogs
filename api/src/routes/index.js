const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('../controllers/getDogs.js');
const getDogById = require('../controllers/getDogById.js');
const getDogsByBreed = require('../controllers/getDogsByBreed.js');
const createDogs = require('../controllers/createDogs.js');
const geTemperaments = require('../controllers/geTemperaments.js');


const router = Router();



router.get('/dogs',  getDogs);

router.get('/dogs/:idRaza', getDogById);
//Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query.
router.get('/search',getDogsByBreed);
//createDogs
router.post('/createdogs',createDogs);

router.get('/temperaments', geTemperaments);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
