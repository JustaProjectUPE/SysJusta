const fs = require('fs');

function giveExtract(client_token){

    const data = fs.readFileSync('db/db.json','utf-8');
    const client_extract = JSON.parse(data).extract;
    
    return [200, client_extract];

}


module.exports = giveExtract;