const express = require('express');
const routes = express.Router();
const fs = require('fs');

//Funções criadas para auxiliar
const checkEntry = require('../func/dataGivers/login.js'); //checagem login
const giveData = require('../func/dataGivers/give.js'); //Entrega dados do cliente
const giveExtract = require('../func/dataGivers/giveExtract.js');//Entrega extrato do cliente
const extract = require('../func/extract.js'); 
const register = require('../func/dataRegisters/register.js'); //registra cliente
const registerEmp = require('../func/dataRegisters/registerEmp.js'); //registra funcionário
const productRegister = require('../func/dataRegisters/productRegister.js'); //registra produto
const giveProduct = require('../func/dataGivers/giveProduct.js') //entrega produto
const giveEmp = require('../func/dataGivers/giveEmp.js')//entrega funcionários

//LOGIN, retorna o token do cliente e o nível dele
routes.get('/signin/:login/:password', async(req,res)=>{// em /:login e /:password, os dois pontos idicam que os parametros vão ser passados ao servidor, logo são variáveirs que poderão ser acessadas.

   try{
        
        const response = await checkEntry(req.params.login,req.params.password);//parametros passados pelos : na url
        res.status(200).json(response);  //.status(200) significa que o servidor conferiu, .json(response) vai enviar o retorno da função login para o frontend , que no caso vai ser 200 ou 500
      
    }catch(err){
        console.log(err)
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


//Envio de dados de extrato 
routes.get('/extract/:client_token',async(req,res)=>{

    try{

        const response = await giveExtract(req.params.client_token);
        res.status(200).json(response);

    }catch(err){

        res.status(500).json({err:err});

    }


});




//CADASTRO
routes.post('/register',async(req,res)=>{

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

    try{

        let response = await register([name,surname,birth,cpf,cnpj,phone,email,login,password,biz]);
        res.status(response);
        

    }catch(err){
        res.status(500);
    }


});


//CADASTRO DE FUNCIONÁRIOS
routes.post('/empRegister',async(req,res)=>{

    const name = req.body.name;
    const client_token = req.body.client_token;
    let response;

    try{

        response = await registerEmp(name,client_token);
        res.status(response);

    }catch(err){
        res.status(500);
    }

});

//CADASTRO DE PRODUTOS

routes.post('/productRegister',async(req,res)=>{

    const code = req.body.code;
    const product = req.body.product;
    const value = req.body.product;
    const stock = req.body.stock;
    const client_token = req.body.stock;
    let response;
    try{

        response = await productRegister([code,product,value,stock],client_token);
        res.status(response);
        

    }catch(err){

        res.status(500);

    }


});

//ENVIO DADOS DE PRODUTOS
routes.get('/products/:client_token',async(req,res)=>{

    try{

        const response = await giveProduct(req.params.client_token);
        res.status(200).json(response);
        console.log(req.params.code);
    }catch(err){

        res.status(500).json({err:err});

    }


});

//ENVIO DADOS DE FUNCIONÁRIOS
routes.get('/emp/:client_token',async(req,res)=>{

    try{
        const response = await giveEmp(req.params.client_token);
        res.status(200).json(response);

    }catch(err){

        res.status(500).json({err:err});

    }


});


//SALDO
routes.post('/menu/balance',async(req,res)=>{

    const client_token = req.body.client_token; //Recebe o ID do cliente
    const value = req.body.value; //Recebe o valor que será atribuído ou retirado do saldo  
    const data = fs.readFileSync('db/db.json','utf-8');
    const obj = JSON.parse(data);

    try{
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
        res.status(500);
    }


});

//EXTRATO
routes.post('/menu/extract',async(req,res)=>{

    const client_token = req.body.client_token; //Recebe o ID do cliente
    const month = req.body.month; //Recebe os meses que o cliente pediu o extrato
    const extract_type = req.body.extract_type; //Escolhe o tipo de extrato
    let response;        
    
    try{
        response = await extract(client_token, month, extract_type); //Função para verificar o extrato      
        res.status(response);

    }catch(err){
        res.status(500);
    }


});


module.exports = routes;