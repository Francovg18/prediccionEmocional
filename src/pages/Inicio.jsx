import React from "react";
import { Routes, Route } from "react-router-dom";
import Formulario from "../componentes/Formulario";
import Resultado from "../componentes/Resultado";
import Header from "../componentes/Header";

function Inicio() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </>
  );
}

export default Inicio;
