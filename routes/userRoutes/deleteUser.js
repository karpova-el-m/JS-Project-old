const data = require('../../sql3-data');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const success = await data.deleteUser(id);
    // res.end(JSON.stringify(success));
    if (success) {
        res.end(JSON.stringify({ message: 'User deleted' }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};

// const data = require('../../data');

// module.exports = (req, res) => {
//     const id = parseInt(req.url.split('/')[2]);
//     const success = data.deleteUser(id);
//     if (success) {
//         res.writeHead(204);
//         res.end();
//     } else {
//         res.writeHead(404);
//         res.end(JSON.stringify({ message: 'User not found' }));
//     }
// };
