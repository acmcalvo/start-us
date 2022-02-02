const router = require('express').Router();


const usersRoutes = require('./user-routes.js');

const servicesRoutes = require('./service-routes.js');

router.use('/users', usersRoutes);
router.use('/service', servicesRoutes);


module.exports = router;