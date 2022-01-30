// import all models
const User = require('./User');
const Service = require('./Service');


//associations
Service.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Service, {
    foreignKey: 'user_id'
});


module.exports = { User,Service };