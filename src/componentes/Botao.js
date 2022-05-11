import React from "react";
import "../assets/css/botao.css";

const Botao = ({ children }) => {
  return <button className="formulario__botao">{children}</button>;
};

export default Botao;
