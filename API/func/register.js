const fs = require('fs');

async function register(reg){

    fs.readFile('./db/db.json','utf-8',(err,data)=>{
        if(err) throw err;

        let obj = JSON.parse(data); 
        let ext = {};
        let client = {
            "name" : reg[0],
            "surname": reg[1],
            "birth": reg[2],
            "cpf":reg[3],
            "cnpj" : reg[4],
            "phone" : reg[5],
            "email" : reg[6],
            "login" : reg[7],
            "password" : reg[8],
            "biz" : reg[9],
            "finance" : "0",
            "client_token": newDB.extract.length
            };

        obj.clients.push(client);
        obj.extract.push(ext);
        console.log(obj);
        
        fs.writeFile('./db/db.json',JSON.stringify(obj),(err)=>{
            if(err) throw err;

            console.log('File updated')
        });

    });
    
}


module.exports = register;