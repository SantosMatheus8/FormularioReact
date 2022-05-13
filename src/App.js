import React from "react";
import "./reset.css";
import Form from "./componentes/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pagina404 from "./componentes/Pagina404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
