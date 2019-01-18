const express = require('express');
const mysql = require('mysql');
const path= require('path');

const app = express();

const posts = require ('./routes/posts');
const login = require ('./routes/logincheck');
const getUserDetails = require ('./routes/getUserDetails');

app.use(express.static(path.join(__dirname,'../dist/AngularLogin')));
app.use('/posts',posts);
app.use('/logincheck',login);
app.use('/getUserDetails',getUserDetails);

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'../dist/AngularLogin/index.html'))
} );

const port = process.env.PORT|| 4200
app.listen(port, () => {
    console.log('Server started');
});