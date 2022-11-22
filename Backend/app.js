const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
var session = require('cookie-session');

const app = express();

const users = require('./routes/users');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
//
//Static Folder
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.send('Invalid endpoint')
})

// Index Route
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});