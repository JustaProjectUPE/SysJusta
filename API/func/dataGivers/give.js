const fs = require('fs');

function giveData(client_token){

    const data = fs.readFileSync('db/db.json','utf-8');
    const client = JSON.parse(data).clients

    return client[client_token];

}

module.exports = giveData;