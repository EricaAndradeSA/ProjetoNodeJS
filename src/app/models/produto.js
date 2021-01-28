const db = require('../../config/database');

module.exports = {
    ListarProdutos: function (callback){
        const consulta = 'SELECT * FROM produtos';
        
        db.query(consulta, function(err, resultado){
            if (err){
                return new Error(`Erro no banco de dados: ${erro}`);
        }
         callback(resultado);
        });
    }
}