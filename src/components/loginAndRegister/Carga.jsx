import React from "react";
import { Link, useNavigate } from "react-router-dom";
import icono from '../../img/icono.png'
import './style.scss'
const Login = () => {
  const navigate = useNavigate();
const myGreeting =()=>{
  navigate("/stepper")

}

  const myTimeout = setTimeout(myGreeting, 3000);


  return (
    <div className="pantalla__carga">
    <div><img src={icono} className="pantalla__carga__contIcono"/></div>
     
    </div>
  );
};

export default Login;
