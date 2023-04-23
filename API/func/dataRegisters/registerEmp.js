const fs = require('fs');


async function registerEmp(name,client_token){

    fs.readFile('./db/db.json','utf-8',(err,data)=>{
        if(err) return 500;
        
        let newDB = JSON.parse(data);
        const func = {"name":name,"sales":{}};
        newDB.emp[client_token].push(func);

        fs.writeFile('./db/db.json','utf-8',(err)=>{
            if(err) return 500;
            else return 200;
            
        })

    });


}

module.exports = registerEmp;