const express = require('express');

const database = require('../../connection/databases');

const app = express.Router();


app.get('/enderecos', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_enderecos');

    res.send(dados);
});

app.get('/enderecos/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_enderecos WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/enderecos', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_enderecos (cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
    VALUES ('${req.body.cep}', '${req.body.logradouro}','${req.body.numero}', '${req.body.complemento}','${req.body.bairro}', '${req.body.localidade}', '${req.body.uf}', '${req.body.ibge}', '${req.body.gia}', '${req.body.ddd}', '${req.body.siafi}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/enderecos/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_enderecos WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.patch('/enderecos/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_enderecos SET cep='${dados.cep}', logradouro='${dados.logradouro}', numero='${dados.numero}', complemento='${dados.complemento}', bairro='${dados.bairro}', localidade='${dados.localidade}', uf='${dados.uf}', ibge='${dados.ibge}', gia='${dados.gia}', ddd='${dados.ddd}', siafi='${dados.siafi}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

module.exports = app;