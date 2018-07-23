const jsonServer = require('json-server');
const path = require('path');
const getData = require(path.join(__dirname, 'getData/index.js'));
const server = jsonServer.create();
const router = jsonServer.router(getData);
const postRoutes = require('./postRoutes.js');
const getRoutes = require('./getRoutes.json');
const middlewares = jsonServer.defaults();
const port = 5000;

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.status(200).jsonp(postRoutes(req.url));
  } else {
    next()
  }
});

server.use(jsonServer.rewriter(getRoutes))
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running http://localhost:${port}`)
});