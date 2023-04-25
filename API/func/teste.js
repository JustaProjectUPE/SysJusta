const fs = require('fs');

const data = fs.readFileSync('../db/db.json','utf-8');
const db = JSON.parse(data);
const ext = db.extract[0];
let sum = 0;

db.extract[0].forEach((item)=>{

    if(item.value>0){
        sum+=item.value
    }

})

console.log(sum)








