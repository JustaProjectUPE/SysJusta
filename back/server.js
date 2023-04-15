const express = require('express');
const session = require('express-session');
const routes = require('./router');
const bodyParser = require('body-parser');

const app = express();
app.use(routes);
app.use(session({secret:'sakjsasdsakjkjasdjdsak'}));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.listen(3003,()=>{

    console.log('Server is running at http://localhost:3003');

})