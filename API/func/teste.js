const fs = require('fs');

fs.readFile('../db/db.json','utf-8',(err,data)=>{
    if(err) throw err;

    let obj = JSON.parse(data); 
    let ext = {};
    let client = {
        "name" : "Joao",
        "surname": "carlos",
        "birth": "24122005",
        "cpf":"009900099",
        "cnpj" : "0",
        "phone" : "00000000",
        "email" : "joaocarlos@gmail.com",
        "login" : "joaocarlos1",
        "password" : "joaocarlos2",
        "biz" : "joaocarlos",
        "finance" : "0",
        "Client_Token": obj.extract.length
        };

    obj.clients.push(client);
    obj.extract.push(ext);
    console.log(obj);
    
    fs.writeFile('../db/teste.json',JSON.stringify(obj),(err)=>{
        if(err) throw err;

        console.log('File updated')
    });



});


