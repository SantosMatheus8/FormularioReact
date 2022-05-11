import React from "react";
import "../assets/css/forminput.css";

const Forminput = ({ type, id, label, valor, onChange, erro, onBlur }) => {
  return (
    <div className="formulario__conteiner">
      <input
        className="formulario__input"
        type={type}
        id={id}
        name={id}
        value={valor}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className="formulario__label">
        {label}
      </label>
      {erro && <p className="formulario__mensagem-erro">{erro}</p>}
    </div>
  );
};

export default Forminput;
