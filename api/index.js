
const sequelize = require('sequelize');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.

const PORT = process.env.PORT || 3001

conn.sync({ force: false })
  .then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  })
  .catch((e) => {
    console.error(e.message);
  })
