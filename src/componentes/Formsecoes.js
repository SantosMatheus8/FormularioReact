import React from "react";
import "../assets/css/formsecoes.css";

const Formsecoes = (props) => {
  return (
    <fieldset>
      <legend className="titulo-legenda">{props.title}</legend>
      {props.children}
    </fieldset>
  );
};

export default Formsecoes;
