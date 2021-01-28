const produto = require('../models/produto')

module.exports = {
    Listar:function(request, response){
        produto.ListarProdutos(function(produtos){
            if(!produtos){
                return response.json({erro:'Não tem produtos cadastrados'});
            }
            
            return response.json(produtos);
        });
    }
}