const fs = require('fs');

fs.readFile('../db/jsonfuncionarios.json','utf-8',(err, data)=>{
    if(err) throw err;


    let func = JSON.parse(data);
    let valores = func.func;

    console.log(valores[0]);
    console.log(func);





})