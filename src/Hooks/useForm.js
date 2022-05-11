import React from "react";

const tipos = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  cpf: {
    regex: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/,
    message: "CPF inválido",
  },
};

const useForm = (tipo) => {
  const [valor, setValor] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function valido(valor) {
    if (tipo === false) return true;
    if (valor.length === 0) {
      setErro("Preencha um valor");
      return false;
    } else if (tipos[tipo] && !tipos[tipo].regex.test(valor)) {
      setErro(tipos[tipo].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) valido(target.value);
    setValor(target.value);
  }

  return {
    valor,
    setValor,
    erro,
    onChange,
    onBlur: () => valido(valor),
    valido: () => valido(valor),
  };
};

export default useForm;
