const router = require('express').Router();


const usersRoutes = require('./user-routes');

const servicesRoutes = require('./service-routes');

router.use('/users', usersRoutes);
router.use('/service', servicesRoutes);


module.exports = router;