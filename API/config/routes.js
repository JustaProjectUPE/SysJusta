const express = require('express');
const routes = express.Router();
const checkEntry = require('../func/login.js');
const giveData = require('../func/give.js');

//LOGIN
routes.get('/signin/:login/:password', async(req,res)=>{// em /:login e /:password, os dois pontos idicam que os parametros vão ser passados ao servidor, logo são variáveirs que poderão ser acessadas.

   try{
        
        const response = checkEntry(req.params.login,req.params.password);//parametros passados pelos : na url
        res.status(200).json(response);  //.status(200) significa que o servidor conferiu, .json(response) vai enviar o retorno da função login para o frontend , que no caso vai ser 200 ou 500
      
    }catch(err){

        res.status(500).json({err: err});
       
   }

})

//ENVIO DE DADOS AO ENTRAR
routes.get('/menu/:client_tolken', async(req,res)=>{

    try{
        const response = giveData(req.params.client_tolken);
        req.status(200).json(response);

    }catch(err){
        res.status(500).json( {err : err} );
    }


})

//CADASTRO
routes.post('/cadastro')

module.exports = routes;