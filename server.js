const express = require('express');
const server = express();
const routes = require ('./src/routes');

server.use(express.json());
server.use(routes);

server.listen(3000, function(){
    console.log("servidor subiu");
});