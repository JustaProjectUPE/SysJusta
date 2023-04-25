const fs = require('fs');

function financeOk(client,i){
    let sum = 0;

    client.extract[i].forEach((val)=>{

        sum+=val.values;
    });

    client.clients[i].finance = sum;

    fs.writeFile('./db/db.json')


}