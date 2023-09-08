const express = require ('express');
const cors = require ('cors');
const EnderecosRouter = require ('./resourses/endereços/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(EnderecosRouter);

app.use((req, res) => {
    res.status(404).send("Nenhuma rota encontrada")
})

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-----------');
    console.log('-- ATIVO! --');
    console.log('-----------');
});