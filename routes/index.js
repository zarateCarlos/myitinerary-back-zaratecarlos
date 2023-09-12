import express from 'express';
import userRouter from './users.js'
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js';
import auth_router from './auth.js';
import activitiesRouter from './activities.js';


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/cities', citiesRouter )
router.use('/itineraries', itinerariesRouter )
router.use('/activities', activitiesRouter)
router.use('/auth', auth_router)

export default router;
