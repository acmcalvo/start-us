// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// const app = express();
// const PORT = process.env.PORT || 3002;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// module.exports = app;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({
//     helpers
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// sequelize.sync({
//     force: false
// }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });

// const mysql = require('mysql2/promise'); // Use mysql2 with promises for better async handling

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10, // Set the connection pool limit
//   queueLimit: 0
// });

// app.get('/users', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');
//     res.render('users', { users: rows });
//   } catch (err) {
//     console.error('Database query failed:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// const app = express();
// const PORT = process.env.PORT || 3002;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// module.exports = app;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({
//     helpers
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// sequelize.sync({
//     force: false
// }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });

// // MySQL connection pool setup using mysql2/promise with Clever Cloud variables
// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: process.env.MYSQL_ADDON_HOST,
//   user: process.env.MYSQL_ADDON_USER,
//   password: process.env.MYSQL_ADDON_PASSWORD,
//   database: process.env.MYSQL_ADDON_DB,
//   waitForConnections: true,
//   connectionLimit: 10, // Set the connection pool limit
//   queueLimit: 0
// });

// // Route to fetch users from the MySQL database
// app.get('/users', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');
//     res.render('users', { users: rows });
//   } catch (err) {
//     console.error('Database query failed:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const serverless = require('serverless-http'); // Add serverless-http to wrap your app

// const app = express();
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({
//     helpers
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// // Remove app.listen() since Vercel does not support persistent servers
// // app.listen(PORT, () => console.log('Now listening'));

// // Export the Express app as a serverless function
// module.exports = app;


const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3002; // Render will set the PORT environment variable

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({
    helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    });

// MySQL connection pool setup using mysql2/promise with Clever Cloud variables
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.render('users', { users: rows });
    } catch (err) {
        console.error('Database query failed:', err);
        res.status(500).send('Internal Server Error');
    }
});
