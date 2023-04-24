const fs = require('fs');

function giveEmp(client_token){

    const data = fs.readFileSync('db/db.json','utf-8');
    const client_emp = JSON.parse(data).emp;

    return [200, client_emp];

}

module.exports = giveEmp;