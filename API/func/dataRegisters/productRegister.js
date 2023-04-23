const { json } = require('body-parser');
const fs = require('fs');


async function productRegister(info,client_token){

    fs.readFile('./db/db.json','utf-8',(err,data)=>{
        if(err) return 500;

        let newDB = JSON.parse(data);
        const product_info = {"code":info[0],"product":info[1],"value":info[2],"stock":info[3]};

        newDB.products[client_token].push(product_info);

        

    });




}


module.exports = productRegister;