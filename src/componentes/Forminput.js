import React from "react";
import "../assets/css/forminput.css";

const Forminput = ({ type, id, label, value, setValue }) => {
  return (
    <div className="formulario__conteiner">
      <input
        className="formulario__input"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <label htmlFor={id} className="formulario__label">
        {label}
      </label>
    </div>
  );
};

export default Forminput;
