var express = require('express');
var User = require('../model/User');
var router = express.Router();
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.get('/intranet', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json(User.list())
})

router.post('/login', (req, res, next) => {
    var userId = User.get(id).id;
    var userPassword = User.get(id).password;
    if(req.body.user.id === userId && req.body.password === userPassword){
        //auth ok
        const token = jwt.sign({ userId }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
      }
      
      res.status(500).json({message: 'Login inválido!'});
})

router.post('/logout', (req, res) => {
    req.logout();
})


function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}


module.exports = router;