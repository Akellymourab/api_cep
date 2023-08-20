function buscarCEP(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (conteudo) {
            log.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cid.value = conteudo.localidade;
            uf.value = conteudo.uf;
            pais.value = "Brasil";
        });




    log.value = "Av santos dummont";
    bairro.value = "Aldeota";
    cid.value = "Fortaleza";
    uf.value = "Ceará";
    pais.value = "Brasil";
}