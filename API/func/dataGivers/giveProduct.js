const fs = require('fs');

async function giveProduct(client_token){

    fs.readFile('./db/db.json','utf-8',(err,data)=>{
        if(err) return {err:err};
        
        const DB = JSON.parse(data);
        
        return DB.products[client_token];

    })

}

module.exports = giveProduct;
