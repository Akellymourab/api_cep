import React, { useState } from 'react';
import Image from "./undraw_Map_dark_re_36sy.png"

const CadastroEndereco = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [pais, setPais] = useState('');

  const buscarCEP = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
        setPais('Brasil');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to submit the data here
  };

  return (
    <div className="container" style={{ backgroundColor: 'antiquewhite' }}>
      <h1 className="mt-4">ENDEREÇO</h1>
      <hr />

      <section className="row align-items-center">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <label>CEP</label>
            <input
              onBlur={buscarCEP}
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>LOGRADOURO</label>
            <input
              type="text"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>NUMERO</label>
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>BAIRRO</label>
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>CIDADE</label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>UF</label>
            <input
              type="text"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />
            <label>PAÍS</label>
            <input
              type="text"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              placeholder="Digite aqui"
              className="form-control mb-3"
              required
            />

            <button type="submit" className="btn btn-primary w-100">
              ENVIAR
            </button>
          </form>
        </div>
        <div className="col">
          <img
            className="w-100"
            src={Image}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default CadastroEndereco;
