import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionLogoutAsync } from '../../redux/actions/userAction';
import img from '../../img/Img.png'
import ubi from '../../img/ubi.png'
import reta from '../../img/restauran.png'
import { actionGetPaletasAsync } from '../../redux/actions/productActions';
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
 
console.log(first)
    const onCloseSession = () => {
      
navigate('/singin')
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
        
        first.map((element, index)=>{
          return(

          
          <div key={index} className='home__publicidad__cont'> <p>{element.titulo} </p></div>
        )})
      }
      </div>
    </div>
   <section>
   {
productos.map((element, index)=>{
  return(
  <div className='home__restaurante'>
  <img src={element.img}/>
  <div>
  <p>{element.name}</p>
  <p>{}</p>
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