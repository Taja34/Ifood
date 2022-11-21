import React from 'react'
import casa from '../../img/hogar.png'
import lupa from '../../img/lupa.png'
import reloj from '../../img/historia.png'
import usuario from '../../img/usuario.png'
import { Outlet, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  const redireccion =()=>{
    navigate('/buscador')
  }
  const redireccion1 =()=>{
    navigate('/home')
  }
  const redireccion2 =()=>{
    navigate('/allorders')
  }
  return (
    <>
    <footer className='footer'><img src={casa} className='footer__iconos' onClick={redireccion1} /> <img src={lupa} className='footer__iconos' onClick={redireccion}/><img src={reloj} className='footer__iconos' onClick={redireccion2}/><img src={usuario} className='footer__iconos'/></footer>
    <Outlet/>
  </>)
}

export default Footer