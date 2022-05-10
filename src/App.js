import "./reset.css";
import Forminput from "./componentes/Forminput";

function App() {
  return (
    <div>
      <Forminput htmlFor="nome" type="text" id="nome" label="Nome Completo" />
      <Forminput
        htmlFor="dataNasc"
        type="date"
        id="dataNasc"
        label="Data de nascimento"
      />
      <Forminput htmlFor="cpf" type="text" id="cpf" label="CPF" />
      <Forminput
        htmlFor="telefone"
        type="text"
        id="telefone"
        label="Telefone"
      />
      <Forminput htmlFor="email" type="text" id="email" label="Email" />
      <Forminput htmlFor="senha" type="password" id="senha" label="Senha" />
      <Forminput
        htmlFor="confirmaSenha"
        type="password"
        id="confirmaSenha"
        label="Confirmar Senha"
      />
      <Forminput htmlFor="cep" type="text" id="cep" label="CEP" />
      <Forminput htmlFor="cidade" type="text" id="cidade" label="Cidade" />
      <Forminput htmlFor="estado" type="text" id="estado" label="Estado" />
      <Forminput htmlFor="numero" type="text" id="numero" label="Numero" />
      <Forminput htmlFor="bairro" type="text" id="bairro" label="Bairro" />
      <Forminput
        htmlFor="complemento"
        type="text"
        id="complemento"
        label="Complemento"
      />
    </div>
  );
}

export default App;
