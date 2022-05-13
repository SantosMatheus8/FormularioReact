import React from "react";
import stylesBotao from "../assets/css/botao.module.css";

const Botao = ({ children }) => {
  return <button className={stylesBotao.formularioBotao}>{children}</button>;
};

export default Botao;
