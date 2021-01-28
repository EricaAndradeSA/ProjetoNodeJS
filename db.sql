CREATE DATABASE fseletro;


CREATE TABLE `comentarios` (
 `id` int(30) NOT NULL AUTO_INCREMENT,
 `nome` varchar(30) NOT NULL,
 `msg` varchar(50) NOT NULL,
 `data` datetime NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4

CREATE TABLE `produtos` (
 `idproduto` int(11) NOT NULL AUTO_INCREMENT,
 `categoria` varchar(45) NOT NULL,
 `descricao` varchar(120) NOT NULL,
 `preco` decimal(8,2) NOT NULL,
 `preco_final` decimal(8,2) NOT NULL,
 `imagem` varchar(245) DEFAULT NULL,
 PRIMARY KEY (`idproduto`),
 UNIQUE KEY `imagem_UNIQUE` (`imagem`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4