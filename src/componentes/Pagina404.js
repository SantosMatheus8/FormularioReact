import React from "react";
import { Link } from "react-router-dom";
import stylesErro from "../assets/css/pagina404.module.css";

const Pagina404 = () => {
  return (
    <div className={stylesErro.cartao}>
      <h1 className={stylesErro.erro}>Erro 404</h1>
      <p className={stylesErro.texto}>Não foi possível encontrar a página</p>
      <p className={stylesErro.link}>
        <Link to="/" style={{ cursor: "pointer" }}>
          VOLTAR
        </Link>
      </p>
    </div>
  );
};

export default Pagina404;
