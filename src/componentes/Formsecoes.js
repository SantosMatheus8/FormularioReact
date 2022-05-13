import React from "react";
import stylesSecao from "../assets/css/formsecoes.module.css";

const Formsecoes = (props) => {
  return (
    <fieldset className={stylesSecao.fieldset}>
      <legend className={stylesSecao.legenda}>{props.title}</legend>
      {props.children}
    </fieldset>
  );
};

export default Formsecoes;
