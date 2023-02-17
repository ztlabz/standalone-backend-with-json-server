const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('db.json');
const router = jsonServer.router('./db/db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3033;

server.listen(port, () => {
  console.log(`JSON Server is running on port `, port);
  const current_time_utc = new Date().toISOString();
  console.log('Current time UTC: ', current_time_utc);
  console.log('***** standalone-backend-with-json-server READY');
});