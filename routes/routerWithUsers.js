const url = require('url');

const createUser = require('./userRoutes/createUser');
const deleteUser = require('./userRoutes/deleteUser');
const getUser = require('./userRoutes/getUser');
const listUsers = require('./userRoutes/listUsers');
const updateUser = require('./userRoutes/updateUser');

const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;

    res.setHandler('Content-Type', 'application/json');

    if (path === '/users' && method === 'GET') {
        listUsers(req, res);
    } else if (path === '/users' && method === 'POST') {
        createUser(req, res);
    } else if (path.startsWith('/users') && method === 'GET') {
        getUser(req, res);
    } else if (path.startsWith('/users') && method === 'PUT') {
        updateUser(req, res);
    } else if (path.startsWith('/users') && method === 'DELETE') {
        deleteUser(req, res);
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};

module.exports = routeHandler;