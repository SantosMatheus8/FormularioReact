import React from "react";
import { Link } from "react-router-dom";
import stylesSucesso from "../assets/css/cadastrosucesso.module.css";

const Cadastrosucesso = () => {
  return (
    <div className={stylesSucesso.conteiner}>
      <div className={stylesSucesso.cartao}>
        <p className={stylesSucesso.texto}>
          Parabéns, seu cadastro foi realizado com sucesso
        </p>
        <p className={stylesSucesso.link}>
          <Link to="/" style={{ cursor: "pointer" }}>
            VOLTAR
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastrosucesso;
