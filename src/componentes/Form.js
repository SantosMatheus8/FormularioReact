import React from "react";
import stylesForm from "../assets/css/formcontainer.module.css";
import Forminput from "./Forminput";
import Formsecoes from "./Formsecoes";
import useForm from "../Hooks/useForm";
import Botao from "./Botao";

import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const Form = () => {
  const nome = useForm();
  const dataNasc = useForm();
  const cpf = useForm("cpf");
  const telefone = useForm();
  const email = useForm("email");
  const senha = useForm("senha");
  const confirmaSenha = useForm("senha");
  const cep = useForm("cep");
  const cidade = useForm();
  const estado = useForm();
  const numero = useForm();
  const bairro = useForm();
  const complemento = useForm();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (
      nome.valido() &&
      dataNasc.valido() &&
      cpf.valido() &&
      telefone.valido &&
      email.valido() &&
      senha.valido() &&
      confirmaSenha.valido() &&
      cep.valido() &&
      cidade.valido() &&
      estado.valido() &&
      numero.valido() &&
      bairro.valido() &&
      complemento.valido()
    ) {
      navigate("*");
    } else {
      alert("Preencha corretamente todos os campos");
    }
  }

  return (
    <div className={stylesForm.cartao}>
      <h1 className={stylesForm.cartaoTitulo}>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Formsecoes title="Informações Pessoais">
          <Forminput id="nome" label="Nome Completo" type="text" {...nome} />
          <Forminput
            id="dataNasc"
            label="Data de nascimento"
            type="date"
            {...dataNasc}
          />
          <Forminput id="cpf" label="CPF" type="text" {...cpf} />
          <Forminput id="telefone" label="Telefone" type="text" {...telefone} />
        </Formsecoes>

        <Formsecoes title="Informações Da Conta">
          <Forminput id="email" label="Email" type="text" {...email} />
          <Forminput id="senha" label="Senha" type="password" {...senha} />
          <Forminput
            id="confirmaSenha"
            label="Confirmar Senha"
            type="password"
            {...confirmaSenha}
          />
        </Formsecoes>

        <Formsecoes title="Endereço">
          <Forminput id="cep" label="CEP" type="text" {...cep} />
          <Forminput id="cidade" label="Cidade" type="text" {...cidade} />
          <Forminput id="estado" label="Estado" type="text" {...estado} />
          <Forminput id="numero" label="Numero" type="text" {...numero} />
          <Forminput id="bairro" label="Bairro" type="text" {...bairro} />
          <Forminput
            id="complemento"
            label="Complemento"
            type="text"
            {...complemento}
          />
        </Formsecoes>

        <Botao>ENVIAR</Botao>
      </form>
    </div>
  );
};

export default Form;
