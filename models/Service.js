const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        service_title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        service_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        budget: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'service'
    }
);

module.exports = Service;