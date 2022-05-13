import React from "react";
import stylesInput from "../assets/css/forminput.module.css";

const Forminput = ({ type, id, label, valor, onChange, erro, onBlur }) => {
  return (
    <div className={stylesInput.conteiner}>
      <input
        className={stylesInput.input}
        type={type}
        id={id}
        name={id}
        value={valor}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className={stylesInput.label}>
        {label}
      </label>
      {erro && <p className={stylesInput.mensagemErro}>{erro}</p>}
    </div>
  );
};

export default Forminput;
