const db = require('../../config/database');

module.exports = {
    criar:function(dados, callback){
        const {nome, msg} = dados;
        const consulta = `INSERT INTO comentarios (nome, msg) VALUES ('${nome}','${msg}')`;
        
        db.query(consulta, function(err, resultado){
            if (err){
                return new Error(`Erro no banco: ${err}`);
            }
            callback();    
           
        });
    
    },
    
    listar:function(callback){
        const consulta='SELECT * FROM comentarios';
        db.query(consulta, function(err, resultado){
            if (err){
                return new error(`Erro no banco:${err}`);
            }
            callback(resultado);
        });
    },
};
