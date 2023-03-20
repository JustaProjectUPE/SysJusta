const express = require('express');
const routes = require('./router')


const app = express();

app.use(routes)


app.listen(3003,()=>{

    console.log('Server is running at http://localhost:3003');

})