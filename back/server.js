const express = require('express');
const bodyParser = require('body-parser');

//configuração do express
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
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

    let new_client = {"nome":"","endereco":"","Idade":"","saldo":"","divida":"","login":"","senha":""};
    let nome=req.body.nome ,idade=req.body.idade, endereco=req.body.endereco , login=req.body.login, senha = req.body.senha;

    new_client.nome=nome;
    new_client.endereco=endereco;
    new_client.Idade=idade;
    new_client.login=login;
    new_client.senha=senha;

    console.log(db_client);
    db_client.push(new_client);
    console.log(db_client);
})




//Servidor rodando
app.listen(3003,()=>{

    console.log('Server is running at http://localhost:3003');

})