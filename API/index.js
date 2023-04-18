const express = require('express');
const cors = require('cors');
const routes = require('./config/routes');
const bodyParser = require('body-parser');

const PORT = 3000;//Servidor na porta 3000

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());//json utilizado para retornos para o frontend
app.use(cors());//feature de segurança 
app.use(routes);

app.listen(PORT,()=>{console.log('SERVER RUNNING ON PORT 3000');})