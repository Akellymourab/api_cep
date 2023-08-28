CREATE TABLE tb_enderecos(
     id INT AUTO_INCREMENT PRIMARY KEY,
     cep INT, 
     logradouro VARCHAR(100) NOT NULL,
     numero INT NOT NULL,
     complemento VARCHAR(50) NOT NULL,
     bairro VARCHAR(50) NOT NULL,
     localidade VARCHAR(25) NOT NULL,
     uf VARCHAR(5) NOT NULL,
     pais VARCHAR(20) NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME NULL
);
ALTER TABLE tb_enderecos
MODIFY ;

ALTER TABLE tb_enderecos
DROP COLUMN siafi;

ALTER TABLE tb_enderecos
ADD pais VARCHAR(20) NULL AFTER uf;

ALTER TABLE tb_enderecos
ALTER COLUMN cep VARCHAR(10);