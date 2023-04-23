const fs = require('fs');

async function giveExtract(client_token){

    const data = fs.readFile('./db/db.json','utf-8');
    let parsed_db = JSON.parse(parsed_db);
    const client_extract = parsed_db.extract[client_token]; 
    
    return [200, client_extract];

}


module.exports = giveExtract;