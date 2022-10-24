const express = require('express');
const config = require('config');
const bodyParser = require('body-parser')
const {dbcon} = require('./utils/dbcon');
const router = require('./router');


const app = express();
const port = config.get('port')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`App started on port ${port}`)
    dbcon()
})

app.use('/api/',router)