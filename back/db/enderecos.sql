CREATE TABLE tb_enderecos(
     id INT AUTO_INCREMENT PRIMARY KEY,
     cep INT, 
     logradouro VARCHAR(100) NOT NULL,
     numero INT NOT NULL,
     complemento VARCHAR(50) NOT NULL,
     bairro VARCHAR(50) NOT NULL,
     localidade VARCHAR(25) NOT NULL,
     uf VARCHAR(5) NOT NULL,
     ibge INT,
     gia INT NULL,
     ddd INT,
     siafi INT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME NULL
);
ALTER TABLE tb_enderecos
MODIFY ;
