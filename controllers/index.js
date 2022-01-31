const router = require('express').Router ();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userDashboard = require('./user-dashboard-routes');

router.use('/api', apiRoutes) // for CRUD
router.use('/', homeRoutes) //views
router.use('/user', userDashboard) ///member; /developer

module.exports = router
