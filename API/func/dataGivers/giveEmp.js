const fs = require('fs');

async function giveEmp(client_token){

    fs.readFile('./db/db.json','utf-8',(err,data)=>{
        if(err) return 500;

        const DB = JSON.parse(data);
        return DB.emp[client_token];

    })

}

module.exports = giveEmp;