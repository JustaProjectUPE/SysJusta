const fs = require('fs');

async function giveData(client_tolken){

    const data = fs.readFileSync('db/db.json','utf-8');
    const client = JSON.parse(data).clients

    return client[client_tolken];

}


module.exports = giveData;