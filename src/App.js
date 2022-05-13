import React from "react";
import "./reset.css";
import Form from "./componentes/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pagina404 from "./componentes/Pagina404";
import Cadastrosucesso from "./componentes/Cadastrosucesso";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="cadastroRealizado" element={<Cadastrosucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
