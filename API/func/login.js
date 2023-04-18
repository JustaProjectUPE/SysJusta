const fs = require('fs');

async function checkEntry(log, passw){
    
    const data = fs.readFileSync(__dirname+'API\\db\\db.json','utf-8'); //Lê o arquivo JSON
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

                return 200;//success

            }else if(i == users.length-1 && (users[i] != log && pass[i] != passw )){

                return 500;

            }

        }

    }else{

        return 500;//error

    }

}

module.exports = checkEntry;