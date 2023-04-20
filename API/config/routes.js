const express = require('express');
const routes = express.Router();
const checkEntry = require('../func/login.js');
const giveData = require('../func/give.js');

//LOGIN
routes.get('/signin/:login/:password', async(req,res)=>{// em /:login e /:password, os dois pontos idicam que os parametros vão ser passados ao servidor, logo são variáveirs que poderão ser acessadas.

   try{
        
        const response = await checkEntry(req.params.login,req.params.password);//parametros passados pelos : na url
        res.status(200).json(response);  //.status(200) significa que o servidor conferiu, .json(response) vai enviar o retorno da função login para o frontend , que no caso vai ser 200 ou 500
      
    }catch(err){

        res.status(500).json({err: err});
       
   }

})

//ENVIO DE DADOS AO ENTRAR
routes.get('/menu/:client_tolken', async(req,res)=>{

    try{
        const response = await giveData(req.params.client_tolken);
        res.status(200).json(response);

    }catch(err){
        res.status(500).json( {err : err} );
    }


})

//CADASTRO
routes.post('/register',async(req,res)=>{

    try{
        const name = req.body.name;
        const surname = req.body.surname;
        const birth = req.body.birth;
        const cpf = req.body.cpf;
        const cnpj = req.body.cnpj;
        const phone = req.body.phone;
        const email = req.body.email;
        const login = req.body.login;
        const password = req.body.password;
        const biz = req.body.biz;

        register([name,surname,birth,cpf,cnpj,phone,email,login,password,biz]);

        //if(response==200){
         //   req.status(200);
       // }else{
       //     res.status(500).json( {err : err} );
       // }

    }catch(err){
        res.status(500).json( {err : err} );
    }


})

module.exports = routes;