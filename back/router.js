const express = require('express');
const routes = express.Router();



let db=[

    {"clientes":{"1":{"nome":"Cliente 1","Endereco":"Rua da Aurora","Idade":"23","saldo":"1000,00","divida":"0,00","login":"log1","senha":"senha1"},
    "2":{"nome":"Cliente 2","Endereco":"Rua do Sol","Idade":"24","saldo":"103,04","divida":"0,00","login":"log2","senha":"senha1"},
    "3":{"nome":"Cliente 3","Endereco":"Dantas Barreto","Idade":"25","saldo":"10,58","divida":"0,00","login":"log3","senha":"senha3"},
    "4":{"nome":"Cliente 4","Endereco":"Rua da Concórdia","Idade":"26","saldo":"2356700,00","divida":"0,00","login":"log4","senha":"senha1"}
},"funcionarios":{

    "1":{"nome":"funcionario 1","matricula":"1234534"}
}
}
]

routes.post('/login',(res,req)=>{
    console.log(req.body.login);
    res.render('login');

})
routes.get('/login',(req,res) => {
    
    res.render('login');
    

 });

routes.get('/clients',(req,res)=>{

    return res.json(db);

});


module.exports = routes;