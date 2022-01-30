const sequelize = require('../config/connection');
const { User, Service } = require('../models');

const userdata = [
    {
        username: 'alex123',
        email: 'alex@123.com',
        password: 'password123'
    },
    {
        username: 'frank123',
        email: 'frank@123.com',
        password: 'password123'
    },
    {
        username: 'john123',
        email: 'john@123.com',
        password: 'password123'
    },
    {
        username: 'ben123',
        email: 'ben@123.com',
        password: 'password123'
    },
    {
        username: 'tom123',
        email: 'tom@123.com',
        password: 'password123'
    },
    {
        username: 'julia123',
        email: 'julia@123.com',
        password: 'password123',
        account_type: 'developer'
        
    },
    {
        username: 'alicia456',
        email: 'alicia@456.com',
        password: 'password456',
        account_type: 'developer'
    },
    {
        username: 'heather456',
        email: 'heather@456.com',
        password: 'password456',
        account_type: 'developer'
    },
    {
        username: 'lisa456',
        email: 'lisa@456.com',
        password: 'password456',
        account_type: 'developer'
    },
    {
        username: 'chris456',
        email: 'chris@456.com',
        password: 'password456',
        account_type: 'developer'
    },
    {
        username: 'brad456',
        email: 'brad@456.com',
        password: 'password456',
        account_type: 'developer'
    },
    {
        username: 'jeff456',
        email: 'jeff@456.com',
        password: 'password456',
        account_type: 'developer'
    },

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;