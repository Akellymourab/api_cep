const mysql12 = require ('mysql2/promise');

async function execute(sql){
    let conexao = await mysql12.createConnection ({
        user: "root",
        password: "4N4260821",
        database: "api_cep",
        host: "localhost",
    });

    let [rows] = await conexao.execute(sql);

    return rows;
}

module.exports = {
    execute
};