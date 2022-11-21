import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionLogoutAsync } from '../../redux/actions/userAction';
import img from '../../img/Img.png'
import ubi from '../../img/ubi.png'
import reta from '../../img/restauran.png'
import { actionFilterPaletasAsync, actionGetPaletasAsync } from '../../redux/actions/productActions';
import { category } from '../../service/dates';
import { pactionFilterAsync } from '../../redux/actions/platosAction';

const Home = () => {
  
   const navigate = useNavigate()
    const dispatch = useDispatch();
    const { productos } = useSelector((store) => store.products);
    console.log(productos)
    useEffect(() => {
      dispatch(actionGetPaletasAsync());
    }, [dispatch]);
    const menu = [
      {titulo: 'all'},
      {titulo: '🍔 Fast food'},
      {titulo: '🍕 Pizza'},
      {titulo: '🍕 otra vez'},
      
    ]
  
    const [first, setfirst] = useState(menu)
    const [second, setsecond] = useState()
    const onFiltered = (searchValue) => {
      const searchParam = "tipo";
      dispatch(actionFilterPaletasAsync(searchParam, searchValue));
    };
    const onFiltered2 = (element) => {
      let searchValue = element.name
      let id = element.idrestaurante
      const searchParam = "name";
      dispatch(actionFilterPaletasAsync(searchParam, searchValue));
      dispatch(pactionFilterAsync(searchValue))
      navigate('/detalles')
    };
console.log(first)
    const onCloseSession = () => {
      
navigate('/singin')
      };
      const detalles = () => {
      
        navigate('/detalles')
              };
  return (
    <>
    <div className='home'>
    <div className='home__navbar'>
      <img src={ubi}/>
      <div>
      <p className='amarillo'>DELIVER TO</p>
      <p>882 Well St, New-York ˅</p>
      </div>
    </div>
    <div className='home__publicidad'>
      <img src={img}/>
      <img src={img}/>
      </div>
    <p className='home__publicidad__subtitle'>Restaurant and cafes</p>
    <div className='home__menu'>
    <div className='home__menu__overflow'>
      {
        
        category.map((element, index)=>{
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
   <section>
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
  <div className='home__restaurante' key={index} onClick={()=>{onFiltered2(element)}}>
  <img src={element.img} className='home__img'/>
  <div className='home__description'>
  <p>{element.name}</p>
<p>{puntaje}</p>
<p> Work time {element.time}</p>
<p>Before you {element.esto}</p>
  </div>
</div>)})
   }
    <div></div>
   </section>
    <div><button onClick={onCloseSession}>log out</button></div>
    </div>
    </>)
}

export default Home