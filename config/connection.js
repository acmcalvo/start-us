// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;
// try {
//     if (process.env.DATABASE_URL) {
//         sequelize = new Sequelize(process.env.DATABASE_URL, {
//             dialect: 'mysql',
//             dialectOptions: {
//                 ssl: {
//                     rejectUnauthorized: true
//                 }
//             }
//         });
//     } else {
//         sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//             host: 'localhost',
//             dialect: 'mysql',
//             port: 3306
//         });
//     }
//     sequelize.authenticate()
//         .then(() => console.log('Database connected successfully'))
//         .catch(err => console.error('Database connection error:', err));
// } catch (error) {
//     console.error('Failed to initialize Sequelize:', error);
// }

// module.exports = sequelize;


// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;
// try {
//     if (process.env.DATABASE_URL) {
//         sequelize = new Sequelize(process.env.DATABASE_URL, {
//             dialect: 'mysql',
//             dialectOptions: {
//                 ssl: {
//                     rejectUnauthorized: true // Make sure SSL is properly handled
//                 }
//             }
//         });
//     } else {
//         sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//             host: 'localhost',
//             dialect: 'mysql',
//             port: 3306
//         });
//     }
//     sequelize.authenticate()
//         .then(() => console.log('Database connected successfully'))
//         .catch(err => console.error('Database connection error:', err));
// } catch (error) {
//     console.error('Failed to initialize Sequelize:', error);
// }

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
try {
    if (process.env.MYSQL_ADDON_URI) {
        // Connect using the full URI provided by Clever Cloud
        sequelize = new Sequelize(process.env.MYSQL_ADDON_URI, {
            dialect: 'mysql',
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: true
                }
            }
        });
    } else {
        // Local fallback connection (if environment variables not set)
        sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST || 'localhost',
            dialect: 'mysql',
            port: process.env.DB_PORT || 3306
        });
    }

    sequelize.authenticate()
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Database connection error:', err));
} catch (error) {
    console.error('Failed to initialize Sequelize:', error);
}

module.exports = sequelize;

