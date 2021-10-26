var express = require('express');
var Task = require('../model/Tasks');
var router = express.Router();

router.get("/", function (req, res){
    res.json(Task.list())
})

router.get("/:id", function (req, res){
    res.json(Task.get(req.params.id))
})

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!Task.delete(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao exlcuir o registro";
    }
    res.json(resposta);
})

router.post("/:name", function (req, res){
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === ""){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome da tarefa não pode ser vazio!";
        res.json(resposta);
        return
    }
    Task.new(req.params.name);
    res.json(resposta);
})

router.post("/edit/:id/:name", function (req, res){
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === ""){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome da tarefa não pode ser vazio!";
        res.json(resposta);
        return
    }
    Task.edit(req.params.id, req.params.name);
    res.json(resposta);
})



module.exports = router;


