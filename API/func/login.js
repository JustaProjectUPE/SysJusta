const fs = require('fs');

async function checkEntry(log, passw){
    
    const data = fs.readFileSync('db/db.json','utf-8'); //Lê o arquivo JSON
    let client = JSON.parse(data); // Converte o que foi lido em Objeto literal
    let users = [];
    let pass = [];
    
    //Adicionando senhas e usuários em arrays
    client.clients.map((obj) => {
        users.push(obj.login);
        pass.push(obj.password); 
    })

    

    //Verificando as condições para login através dos arrays 
    if(users.includes(log)){

        for(var i = 0; i < users.length; i++){

            if(users[i] == log && pass[i] == passw){
                console.log('WELCOME');
                return [200,client.client_tolken];//success

            }else if(i == users.length-1){
                console.log('WRONG PASS');
                return 500;

            }

        }

    }else{
        console.log('INVALID USER');
        return 500;//error

    }

}

module.exports = checkEntry;