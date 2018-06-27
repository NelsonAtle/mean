var express = require('express');
var app = express();

const mongoose = require('mongoose');
const database = mongoose.connect('mongodb://localhost:27017/postman_node');
const User = require('./modelo/usuario');
let bodyParser = require('body-parser');
+
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/usuarios', (req, res) => {
    User.find(function(err,users){
    	if (err) {
    		res.send(err);
    	}
    	res.json(users);
    });
});
app.post('/api/usuarios', (req, res) => {
    var user = new User();
    user.name = req.body.name;
    user.lasName = req.body.lastName;
    user.user = req.body.user;
    user.password = req.body.password;
    user.save(function(err){
        if(err) {
            res.send(err);
        }
        res.status(201);
        res.json(user);
    });
});



app.listen(3000, function(){
	console.log('Escuchando por el puerto 3000');
});