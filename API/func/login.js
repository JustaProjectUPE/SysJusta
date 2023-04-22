const fs = require('fs');
const clietLevel = require('./clientLevel.js')

async function checkEntry(log, passw){
    
    const data = fs.readFileSync('db/db.json','utf-8'); //Lê o arquivo JSON
    let client = JSON.parse(data); // Converte o que foi lido em Objeto literal
    let users = [];
    let pass = [];
    //let client_token = [];
    let client_level;
    //let client_sum = 0;

    //Adicionando senhas e usuários em arrays
    client.clients.map((obj) => {
        users.push(obj.login);
        pass.push(obj.password); 
        //client_token.push(obj.client_token);
    })

    //Verificando as condições para login através dos arrays 
    if(users.includes(log)){

        for(var i = 0; i < users.length; i++){

            if(users[i] == log && pass[i] == passw){
                console.log('WELCOME');
                
                // Object.values(client.extract[i]).forEach((val)=>{

                //     client_sum += parseInt(val);

                // });

                client_level = clientLevel(client,i);

                // if(client_sum<5000) client_level = 0;
                // else if(client_sum>=5000 && client_sum < 20000) client_level = 1;
                // else if( client_sum >= 20000 && client_sum<50000) client_level =2;
                // else if(client_sum >= 50000 && client_sum<100000) client_level = 3;
                // else if(client_sum >= 100000) client_level = 4;
                
                
                return [200,i,client_level];//success

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