const express = require('express');
const routes = express.Router();



let db=[

    {"1":{"nome":"Cliente 1","Endereco":"Rua da Aurora","Idade":"23","saldo":"1000,00","divida":"0,00"}},
    {"2":{"nome":"Cliente 2","Endereco":"Rua do Sol","Idade":"24","saldo":"103,04","divida":"0,00"}},
    {"3":{"nome":"Cliente 3","Endereco":"Dantas Barreto","Idade":"25","saldo":"10,58","divida":"0,00"}},
    {"4":{"nome":"Cliente 4","Endereco":"Rua da Concórdia","Idade":"26","saldo":"2356700,00","divida":"0,00"}},

]

routes.get('/teste',(req,res) => {
    
    res.status(200).send('Hello, World!')

})

routes.get('/clients',(req,res)=>{

    return res.json(db);

})


module.exports = routes;