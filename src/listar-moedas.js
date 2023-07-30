import React from "react";

function ListarMoedas(){
  const MOEDAS = [
    {
      "sigla": "USD",
      "descricao": "Estados Unidos"
    },
    {
      "sigla": "EUR",
      "descricao": "União Europeia"
    },
    {
      "sigla": "GBP",
      "descricao": "Reino Unido"
    },
    {
      "sigla": "JPY",
      "descricao": "Japão"
    },
    {
      "sigla": "CAD",
      "descricao": "Canadá"
    },
    {
      "sigla": "AUD",
      "descricao": "Austrália"
    },
    {
      "sigla": "CHF",
      "descricao": "Suíça"
    },
    {
      "sigla": "CNY",
      "descricao": "China"
    },
    {
      "sigla": "BRL",
      "descricao": "Brasil"
    }
  ];

  function compare(moeda1, moeda2){
    if (moeda1.descricao < moeda2.descricao) {
      return -1
    } else if (moeda1.descricao > moeda2.descricao) {
      return 1
    }
    return 0;
  }

  return MOEDAS.sort(compare).map(moeda => 
    <option value={moeda.sigla} key={moeda.sigla}>
      {moeda.descricao}
    </option>  
  );

}

export default ListarMoedas