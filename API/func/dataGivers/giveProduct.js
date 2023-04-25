const fs = require('fs');


async function giveProduct(client_token, code = null){

    return new Promise((resolve,reject)=>{
        fs.readFile('./db/db.json','utf-8',(err,data)=>{
            if(err) return {err:err};
            
            const DB = JSON.parse(data);
            const products = [200,DB.products[client_token]];
         
            resolve(products);


        });
    });
}

module.exports = giveProduct;
