const developerRoutes = require('./developer-routes.js');
const memberRoutes = require('./member-routes');
const responseRoutes = require('./response-routes');
const serviceRoutes = require('./service-routes');

router.use('/developer', developerRoutes);
router.use('/member', memberRoutes);
router.use('/response', responseRoutes);
router.use('/service', serviceRoutes);

module.exports = router;