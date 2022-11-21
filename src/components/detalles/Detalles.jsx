import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionFilterPlatosAsync } from '../../redux/actions/platosAction';
import atras  from '../../img/atras.png'
import { platoss } from '../../service/dates';

const Detalles = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { productos } = useSelector((store) => store.products);
  const { platillos } = useSelector((store) => store.platos);
  console.log(productos)
  console.log(platillos)
  const onFiltered = (searchValue) => {
    const searchParam = "tipo";
    dispatch(actionFilterPlatosAsync(searchParam, searchValue));
  };
  const retroceder =()=>{
    navigate('/home')
  }
  const onFiltered2 = (element) => {
    let searchValue = element.name
    let searchParam = 'name'
 dispatch(actionFilterPlatosAsync(searchParam, searchValue))
    navigate('/PlatosDetalles')
  };
  return (<>
{
productos.map((element, index)=>{
  let puntaje = 0;
      if(element.calificacion===1){
puntaje= '⭐'
      }if(element.calificacion===2){
puntaje= '⭐⭐'
      }if(element.calificacion===3){
puntaje= '⭐⭐⭐'
      }if(element.calificacion===4){
puntaje= '⭐⭐⭐⭐'
      }if(element.calificacion===5){
puntaje= '⭐⭐⭐⭐⭐'
      }
  return(
    <>
    <div> 
    <img src={atras} onClick={retroceder} className='atras'/>
    <img src={element.logo} className='home__iconos'/></div>
  <div className='detalles__restaurante' key={index}>
  <img src={element.img} className='home__img'/>
  <div className='home__description'>
  <p>{element.name}</p>
  <p>{element.descripcion}</p>
<p>{puntaje}</p>


  </div>
</div>
</>)})
   }
   <div className='detalles__menu'>
    <div className='home__menu__overflow'>
      {
        
        platoss.map((element, index)=>{
          return(

            <button
          key={element.value}
          variant="warning"
          className='home__publicidad__cont'
          onClick={() => {
            onFiltered(element.label);
          }}
        >
          {element.label}
        </button>
   
        )})
      }
      
      </div>
    </div>
 
 <section className='platillos__cont'>
    {
platillos.map((element, index)=>{
 
  return(
    <div className='platillos' onClick={()=>{onFiltered2(element)}}>
<img src={element.img} className='platillos__img'/>
<p className='platillos__name'>{element.name}</p>
<p className='platillos__precio'>${element.precio}</p>


</div>)})
   }
   </section>
 </> 
 )
}


export default Detalles