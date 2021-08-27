module.exports = {
  "development": {
<<<<<<< HEAD
    "username": "root",
    "password": null,
    "database": "mymadgames",
=======
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
>>>>>>> matias-dev
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "mymadgamest",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "mymadgames",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
