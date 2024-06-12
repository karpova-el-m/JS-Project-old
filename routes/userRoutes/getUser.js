const data = require('../../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const user = await data.getUserById(id);
    if (user.length === 0) {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'User not found' }));
    } else if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};

// const data = require('../../data');

// module.exports = (req, res) => {
//     const id = parseInt(req.url.split('/')[2]);
//     const user = data.getUserByID(id);

// if (user) {
//     res.writeHead(200);
//     res.end(JSON.stringify(user));
// } else {
//     res.writeHead(404);
//     res.end(JSON.stringify({ message: 'User not found' }));
// }
// };