import React from "react";
import "./reset.css";
import "./assets/css/formcontainer.css";
import Forminput from "./componentes/Forminput";

function App() {
  const [nome, setNome] = React.useState("");
  const [dataNasc, setDataNasc] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmaSenha, setConfirmaSenha] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [complemento, setComplemento] = React.useState("");

  return (
    <div className="cartao">
      <h1 className="cartao__titulo">Cadastre-se</h1>
      <form>
        <Forminput
          type="text"
          id="nome"
          label="Nome Completo"
          value={nome}
          setValue={setNome}
        />
        <Forminput
          type="date"
          id="dataNasc"
          label="Data de nascimento"
          value={dataNasc}
          setValue={setDataNasc}
        />
        <Forminput
          type="text"
          id="cpf"
          label="CPF"
          value={cpf}
          setValue={setCpf}
        />
        <Forminput
          type="text"
          id="telefone"
          label="Telefone"
          value={telefone}
          setValue={setTelefone}
        />
        <Forminput
          type="text"
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
        />
        <Forminput
          type="password"
          id="senha"
          label="Senha"
          value={senha}
          setValue={setSenha}
        />
        <Forminput
          type="password"
          id="confirmaSenha"
          label="Confirmar Senha"
          value={confirmaSenha}
          setValue={setConfirmaSenha}
        />
        <Forminput
          type="text"
          id="cep"
          label="CEP"
          value={cep}
          setValue={setCep}
        />
        <Forminput
          type="text"
          id="cidade"
          label="Cidade"
          value={cidade}
          setValue={setCidade}
        />
        <Forminput
          type="text"
          id="estado"
          label="Estado"
          value={estado}
          setValue={setEstado}
        />
        <Forminput
          type="text"
          id="numero"
          label="Numero"
          value={numero}
          setValue={setNumero}
        />
        <Forminput
          type="text"
          id="bairro"
          label="Bairro"
          value={bairro}
          setValue={setBairro}
        />
        <Forminput
          type="text"
          id="complemento"
          label="Complemento"
          value={complemento}
          setValue={setComplemento}
        />
      </form>
    </div>
  );
}

export default App;
