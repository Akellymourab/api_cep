const express = require('express');
const database = require('../../connection/databases');
const app = express.Router();

app.get('/enderecos', async (req, res) => {
  try {
    const dados = await database.execute('SELECT * FROM tb_enderecos');
    res.status(200).send(dados);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/enderecos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const dados = await database.execute(`
    SELECT * FROM tb_enderecos WHERE id='${req.params.id}'`, [id]);
    res.status(200).send(dados[0]);
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/enderecos', async (req, res) => {
  try {
    const { cep, logradouro, numero, complemento, bairro, localidade, uf, pais} = req.body;
    const sql = await database.execute(`
    INSERT INTO tb_enderecos (cep, logradouro, numero, complemento, bairro, localidade, uf, pais)
    VALUES ('${req.body.cep}', '${req.body.logradouro}','${req.body.numero}', '${req.body.complemento}','${req.body.bairro}', '${req.body.localidade}', '${req.body.uf}', '${req.body.pais}');
    `, [cep, logradouro, numero, complemento, bairro, localidade, uf, pais]);

    const insertedId = sql.insertId;
    const insertedData = { id: insertedId, ...req.body };
    res.status(201).send(insertedData);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/enderecos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await database.execute(`DELETE FROM tb_enderecos WHERE id='${req.params.id}'`, [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.patch('/enderecos/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const { cep, logradouro, numero, complemento, bairro, localidade, uf, pais } = req.body;
      
      await database.execute(`
        UPDATE tb_enderecos SET cep='${cep}', logradouro='${logradouro}', numero='${numero}', complemento='${complemento}', bairro='${bairro}', localidade='${localidade}', uf='${uf}', pais='${pais}'
        WHERE id = '${id}'
      `);
  
      const updatedData = { id, cep, logradouro, numero, complemento, bairro, localidade, uf, pais };
      res.status(200).send(updatedData);
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = app;
