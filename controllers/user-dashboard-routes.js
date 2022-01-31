const router = require('express').Router();
const sequielize = require('../config/connection');
const { User, Service } = require('../models');


// get all posts for dashboard
router.get('/', (req, res) => {
    Service.findAll({
        where: {
            user_id: req.res.id
        },
        attributes: [
            'id',
            'service_title',
            'service_type',
            'service_description',
            'budget',
            'user_id'
            // serquelize data goes here
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbServiceData => {
        const services = dbServiceData.map(post => post.get({ plain: true }));
        res.render('dashboard', { services, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
    Service.findByPk(req.params.id, {
        attributes: [
            'id',
            'service_title',
            'service_type',
            'service_type',
            'service_description',
            'budget',
            'user_id'
            // sequelize data
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbServiceData => {
        if (dbServiceData) {
            const services = dbServiceData.get({ plain: true });
            res.render('edit-service', {
                post,
                loggedIn: true
            });
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;


//post a service
// put a service
// delete a service
// get all services