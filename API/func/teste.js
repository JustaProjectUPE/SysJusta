const fs =  require('fs');

const data = fs.readFileSync('../db/db.json','utf-8');
let db = JSON.parse(data);
const teste=[0,1,2,3]
console.log(teste['1'])
console.log(db);