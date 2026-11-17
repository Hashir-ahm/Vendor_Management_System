// Creates (or resets) the admin account with a hashed password.
// Set ADMIN_USERNAME, ADMIN_EMAIL and ADMIN_PASSWORD in .env, then run:  npm run create-admin
require('dotenv').config();
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const { ADMIN_USERNAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
if (!ADMIN_USERNAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Set ADMIN_USERNAME, ADMIN_EMAIL and ADMIN_PASSWORD in your .env file first.');
    process.exit(1);
}

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'vendormanagementsystem'
});

const hash = bcrypt.hashSync(ADMIN_PASSWORD, 10);
const query = `insert into userinfo (username, email, userrole, userpassword) values (?, ?, 'admin', ?)
               on duplicate key update username = values(username), userrole = 'admin', userpassword = values(userpassword)`;

db.query(query, [ADMIN_USERNAME, ADMIN_EMAIL, hash], (err) => {
    if (err) {
        console.error('Could not create admin:', err.message);
        process.exitCode = 1;
    } else {
        console.log(`Admin "${ADMIN_USERNAME}" is ready. You can now log in.`);
    }
    db.end();
});
