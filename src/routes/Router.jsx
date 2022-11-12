import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carga from "../components/loginAndRegister/Carga";
import Confirmacion from "../components/loginAndRegister/Confirmacion";
import Register from "../components/loginAndRegister/Register";
import Singin from "../components/loginAndRegister/Singin";
import Service from "../components/loginAndRegister/Service";
import Stepper1 from "../components/steppers/Stepper1";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Home from "../components/loginAndRegister/Home";

const Router = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carga />} />
        <Route path="/stepper" element={<Stepper1 />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
