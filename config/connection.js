const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

try {
    if (process.env.MYSQL_ADDON_URI) {
        // Use full URI connection for Clever Cloud
        sequelize = new Sequelize(process.env.MYSQL_ADDON_URI, {
            dialect: 'mysql',
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false  // Allow self-signed certificates
                }
            }
        });
    } else {
        // Fallback for local environment
        sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST || 'localhost',
            dialect: 'mysql',
            port: process.env.DB_PORT || 3306,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false  // Allow self-signed certificates for local testing too
                }
            }
        });
    }

    sequelize.authenticate()
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Database connection error:', err));
} catch (error) {
    console.error('Failed to initialize Sequelize:', error);
}

module.exports = sequelize;
