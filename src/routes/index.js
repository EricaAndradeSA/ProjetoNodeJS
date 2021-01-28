const express = require('express');
const routes = express.Router();

const produtosController = require('../app/controllers/produtosController');
const comentariosController = require('../app/controllers/comentariosController');

routes.get('/', produtosController.Listar);
routes.post('/comentario', comentariosController.criarComentario);
routes.get('/comentarios', comentariosController.listarComentarios);

module.exports = routes;