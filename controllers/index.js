const router = require('express').Router ();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const memberRoutes = require('./member-routes');
const developerRoutes = require('./developer-routes');

router.use('/api', apiRoutes) // for CRUD
router.use('/', homeRoutes) //views
router.use('/member', memberRoutes)
router.use('/developer', developerRoutes) ///member; /developer

module.exports = router
