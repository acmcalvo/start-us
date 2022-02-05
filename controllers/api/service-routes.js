const router = require('express').Router();
//const { UPSERT } = require('sequelize/dist/lib/query-types');
const sequelize = require('../../config/connection');
const { User, Service } = require('../../models');
//const { post } = require('./developer-routes');
const withAuth = require('../../utils/auth');

//get all services
router.get('/', (req, res) => {
    Service.findAll({
            attributes: [
                'id',
                'service_title',
                'service_type',
                'service_description',
                'budget',
                'created_at',
                'user_id',
                //[sequelize.literal('(SELECT COUNT(*) FROM service where service.id = user.user_id)')]
            ],
            // include: [{
            //     model: User,
            //     attributes: ['id']
            // }]
        })
        .then(dbServiceData => res.json(dbServiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Service.findOne({
            where: {
                id: req.params.id
            },
            // attributes: [
            //     'id',
            //     'service_type',
            //     'service_description',
            //     'budget',
            //     'user_id'
            // ],
            // include: [{
            //     model: User,
            //     attributes: ['username']
            // }]
        }
        )
        .then(dbServiceData => {
            if (!dbServiceData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(dbServiceData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Service.create({
        // ... req.body, user_id: req.session.user_id
            service_title: req.body.service_title,
            service_type: req.body.service_type,
            service_description: req.body.service_description,
            budget: req.body.budget,
            user_id: req.session.user_id
        })
        .then(dbServiceData => res.json(dbServiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Service.update( req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(dbServiceData => {
            if (!dbServiceData) {
                res.status(404).json({
                    message: 'No service found with this ID'
                });
                return;
            }
            res.json(dbServiceData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Service.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbServiceData => {
            if (!dbServiceData) {
                res.status(404).json({
                    message: 'No Services found with this ID'
                });
                return;
            }
            res.json(dbServiceData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
// developers need to find all or find one service

//get all that applies to developers shows all services on dashboard

//get one that applies to developers 


// members need to post put and delete services.
