const express = require('express');
const routes = express.Router();
const {login} = require('../func/login');

//LOGIN
routes.get('/signin/:login/:password', async(req,res)=>{// em /:login e /:password, os dois pontos idicam que os parametros vão ser passados ao servidor, logo são variáveirs que poderão ser acessadas.

    try{
        
        const response = login(req.params.login,req.params.password);//parametros passados pelos : na url
        res.status(200).json(response)  //.status(200) significa que o servidor conferiu, .json(response) vai enviar o retorno da função login para o frontend , que no caso vai ser 200 ou 500

    }catch(err){

        res.status(500).json({err: err})

    }

})


module.exports = routes;