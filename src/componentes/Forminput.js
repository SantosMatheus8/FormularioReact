import React from "react";

const Forminput = (props) => {
  const [valor, setValor] = React.useState("");

  function handleChange(event) {
    setValor(event.target.value);
  }

  console.log(valor);
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
};

export default Forminput;
