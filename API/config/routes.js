const express = require('express');
const routes = express.Router();
const checkEntry = require('../func/login.js');
const giveData = require('../func/give.js');
const giveExtract = require('../func/giveExtract.js');
const extract = require('../func/extract.js');
const fs = require('fs');

//LOGIN, retorna o token do cliente e o nível dele
routes.get('/signin/:login/:password', async(req,res)=>{// em /:login e /:password, os dois pontos idicam que os parametros vão ser passados ao servidor, logo são variáveirs que poderão ser acessadas.

   try{
        
        const response = await checkEntry(req.params.login,req.params.password);//parametros passados pelos : na url
        res.status(200).json(response);  //.status(200) significa que o servidor conferiu, .json(response) vai enviar o retorno da função login para o frontend , que no caso vai ser 200 ou 500
      
    }catch(err){

        res.status(500).json({err: err});
       
   }

});

//ENVIO DE DADOS AO ENTRAR
routes.get('/menu/:client_tolken', async(req,res)=>{

    try{
        const response = await giveData(req.params.client_tolken);
        res.status(200).json(response);

    }catch(err){
        res.status(500).json( {err : err} );
    }


});


//Envio de dados de extrato e nível
routes.get('/extract/:client_token',async(req,res)=>{

    try{

        const response = await giveExtract(req.params.client_token);
        res.status(500).json(response);

    }catch(err){

        res.status(500).json({err:err});

    }


});




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
        res.status(200);
        //if(response==200){
         //   req.status(200);
       // }else{
       //     res.status(500).json( {err : err} );
       // }

    }catch(err){
        res.status(500).json( {err : err} );
    }


})

//SALDO
routes.post('/menu/balance',async(req,res)=>{

    try{
        const client_token = req.body.client_token; //Recebe o ID do cliente
        const value = req.body.value; //Recebe o valor que será atribuído ou retirado do saldo  
        const data = fs.readFileSync('db/db.json','utf-8');
        const obj = JSON.parse(data);

        //Alterar valores do saldo do cliente
        let balance = obj.clients[client_token].finance;
        const new_balance = parseFloat(balance) + parseFloat(value);
        obj.clients[client_token].finance = new_balance;
        
        //Escrever o novo saldo dentro do json
        fs.writeFile('./db/db.json',JSON.stringify(obj, null, 2), 'utf-8', (err)=>{
            if(err) throw err;

            console.log('File updated')
        });       
      
        res.status(200);

    }catch(err){
        res.status(500).json( {err : err} );
    }


});

//SALDO
routes.post('/menu/extract',async(req,res)=>{

    try{
        const client_token = req.body.client_token; //Recebe o ID do cliente
        const month = req.body.month; //Recebe os meses que o cliente pediu o extrato
        const extract_type = req.body.extract_type; //Escolhe o tipo de extrato        
        extract(client_token, month, extract_type); //Função para verificar o extrato      
        res.status(200);

    }catch(err){
        res.status(500).json( {err : err} );
    }


});

module.exports = routes;