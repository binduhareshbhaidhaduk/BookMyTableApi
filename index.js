import bodyParser from 'body-parser';
import express from  'express';
import Routes from './Routes/routes.js';
import db  from './Config/db.js'
const  port= 1312;

const app=express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/',Routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
    