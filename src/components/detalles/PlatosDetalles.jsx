import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { countActionAdd, countActionMinnus } from '../../redux/actions/countAction';
import atras  from '../../img/atras.png'
const PlatosDetalles = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { contador } = useSelector((store) => store.count);
  const { platillos } = useSelector((store) => store.platos);
  console.log(contador)
  console.log(platillos)
  const suma = ()=>{
    dispatch( countActionAdd(contador))
    setprecio(precio + precioStatico)
  }
  const resta = ()=>{
    console.log(contador)
    if(contador > 1){

    
    dispatch( countActionMinnus(contador) )
    setprecio(precio - precioStatico)
    }}
  const [precio, setprecio] = useState(platillos[0].precio)
  const precioStatico = platillos[0].precio;
  const retroceder =()=>{
    navigate('/home')
  }
  return (<>
    {platillos.map((element, index)=>{
      return(
        <>
        <div className='detallesplatos'>
        <img src={atras} onClick={retroceder} className='atras'/>
          <img src={element.img} className='detallesplatos__img'/>
          <p>{element.name}</p>
          <p>{element.descripcion}</p>
        </div>
    
    <div className='count'>
<div className='count__simbolos'>
<p onClick={resta}>-</p> <p>{contador}</p> <p onClick={suma}>+</p>
</div>
<div className='count__precio'>
  <p>add</p> <p>${precio}</p>
</div>
    </div>
    </> )
    })}
    </>
    )
}

export default PlatosDetalles