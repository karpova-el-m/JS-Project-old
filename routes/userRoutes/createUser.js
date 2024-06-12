const data = require('../../sql3-data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parstedBody = new URLSearchParams(body);
        const name = parstedBody.get('name');
        const age = parstedBody.get('age');

        if (name && age) {
            const user = { name, age: parseInt(age) };
            const createdUser = await data.addUser(user);
            data.addUser(user);
            res.writeHead(201);
            res.end(JSON.stringify(createdUser));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'Name and age are required' }));
        }
    });
};

// const data = require('../../data');

// module.exports = (req, res) => {
//     let body = '';

//     req.on('data', chunk => {
//         body += chunk;
//     });

//     req.on('end', () => {
//         const parstedBody = new URLSearchParams(body);
//         const name = parstedBody.get('name');
//         const age = parstedBody.get('age');

//         if (name && age) {
//             const user = { name, age: parseInt(age) };
//             data.addUser(user);
//             res.writeHead(201);
//             res.end(JSON.stringify(user));
//         } else {
//             res.writeHead(400);
//             res.end(JSON.stringify({ message: 'Name and age are required' }));
//         }
//     });
// };