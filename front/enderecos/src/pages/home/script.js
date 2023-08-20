function enderecosCadastrados(){
    fetch(`http://localhost:8000/enderecos`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(conteudo){
            cep.value = conteudo.cep
            logradouro.value = conteudo.logradouro
            numero.value = conteudo.numero
            complemento.value = conteudo.complemento
            bairro.value = conteudo.bairro
            localidade.value = conteudo.localidade
            uf.value = conteudo.uf
            ibge.value = conteudo.ibge
            gia.value = conteudo.gia
            ddd.value = conteudo.ddd
            siafi.value = conteudo.siafi
        })
}