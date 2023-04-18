const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

//converter os dados tipo json em objeto javascript para leitura
const userData = JSON.parse(fs.readFileSync("back\\dados.json"));

//configuração do express
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');



//define base de dados basica
let db_client=[
        {"nome":"Cliente 1","endereco":"Rua da Aurora","Idade":"23","saldo":"1000,00","divida":"0,00","login":"log1","senha":"senha1"},
        {"nome":"Cliente 2","endereco":"Rua do Sol","Idade":"24","saldo":"103,04","divida":"0,00","login":"log2","senha":"senha1"},
        {"nome":"Cliente 3","endereco":"Dantas Barreto","Idade":"25","saldo":"10,58","divida":"0,00","login":"log3","senha":"senha3"},
        {"nome":"Cliente 4","endereco":"Rua da Concórdia","Idade":"26","saldo":"2356700,00","divida":"0,00","login":"log4","senha":"senha1"}
]  
let db_funcJusta = [
        {"nome":"funcionario 1","login":"loginfunc1","senha":"macaco2"}
]


    
//Rotas para login 
app.get('/login',(req,res)=>{

        res.sendFile(__dirname+'/views/login.html')//Envia arquivo HTML para página web
    })

app.post('/login',(req,res)=>{
    let user=req.body.login; //atribui a variáveis as informações contidas nos inputs do formulário
    let pass=req.body.senha;
    let mode;

    if(req.body.client=='on'){  //verifica checkbox para saber qual modo de login
        mode=db_client;
    }else if(req.body.justaFunc=='on'){
        mode=db_funcJusta;
    }

    for(var u in db_client){

        console.log(u);

        if((mode[u].login===user && mode[u].senha===pass)){//checa as bases referentes ao modo escolhido 
            res.send('BEM VINDO');
         }else if((mode[u+1])==null){
            res.send("Usuario ou senha invalidos")
         }
    
    }

})

//Rotas para Cadastro
app.get('/cadastro',(req,res)=>{res.sendFile(__dirname+'/views/cadastro.html')})

app.post('/cadastro',(req,res)=>{

    const {nome, endereco, idade, saldo, divida, login, senha} = req.body;
    const new_client = {nome, endereco, idade, saldo, divida, login, senha};
    
    //armazenar os dados na variavel userData
    userData.push(new_client);
    //tratamento dos dados tipo javascript para json
    const tratarDados = JSON.stringify(userData, null, 2);
    
    //escrever as informações de cadastro no arquivo json
    fs.writeFileSync("back\\dados.json", tratarDados);
    res.status(200).send("OK");
})




//Servidor rodando
app.listen(3003,()=>{

    console.log('Server is running at http://localhost:3003');

})