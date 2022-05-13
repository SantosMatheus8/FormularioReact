import React from "react";

const tipos = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Digite um CEP válido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Digite um EMAIL válido",
  },
  cpf: {
    regex: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/,
    message: "Digite um CPF válido",
  },
  senha: {
    regex: /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
    message:
      "A senha deve ter entre 6 e 15 dígitos, uma letra minúscula, uma letra maiúscula, um número e um caractere especial",
  },
};

const useForm = (tipo) => {
  const [valor, setValor] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function valido(valor) {
    if (tipo === false) return true;
    if (valor.length === 0) {
      setErro("*Preencha este campo");
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
