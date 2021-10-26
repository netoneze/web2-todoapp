var express = require('express');
var Task = require("../model/Tasks")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1");
    Task.new("Tarefa 2");
  }

  res.render('index', { tasks: Task.list() });
});

router.post("/tarefas", function (req, res){
    const {nome} = req.body;
    if (nome === null || nome === undefined || nome === "") {
      res.send("O nome da tarefa não pode ser vazio!");
      return;
    }
    Task.new(nome);
    res.redirect("/");
})

router.post("/tarefasEdit", function (req, res){
    let body = [];
    body = req.body;
    if (body.nomeEdit === null || body.nomeEdit === undefined || body.nomeEdit === "") {
        res.send("O nome da tarefa não pode ser vazio!");
        return;
    }
    Task.edit(body.dropdown, body.nomeEdit);
    res.redirect("/");
})

router.get("/tarefas/del/:id", function(req, res){
  const {id} = req.params;
  if (!Task.delete(id)) {
    res.send("Falha ao excluir uma tarefa");
    return;
  }
  res.redirect("/");
})

module.exports = router;
