import React from 'react'
import { useForm } from 'react-hook-form';
import './style.scss'
import lupa from '../../img/lupa.png'
import { useDispatch, useSelector } from 'react-redux';
import { actionFilterAsync, actionFilterPaletasAsync } from '../../redux/actions/productActions';
const Buscador = () => {
    const dispatch = useDispatch();
    const { productos } = useSelector((store) => store.products);
    const submit = (data) => {

        console.log(data)
        const user = {
          search: data.search
        }}
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onFiltered = (data) => {
        let searchValue = data.search
        const searchParam = "tipo";
        dispatch(actionFilterAsync(searchValue));
      };
  
  return (
    <>
 <form onChange={handleSubmit(onFiltered)} className="buscador__form">

<label>
<img src={lupa} className='buscador__lupa' />
  <input
    type="text"
placeholder='Search for a dish'
    className='buscador__search'
    {...register("search", { required: true })}
  />
</label>
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
  <div className='home__restaurante' key={index}>
  <img src={element.img} className='home__img'/>
  <div className='home__description'>
  <p>{element.name}</p>
<p>{puntaje}</p>
<p> Work time {element.time}</p>
<p>Before you {element.esto}</p>
  </div>
</div>)})
   }
</section>


</form>
    </>
  )
}

export default Buscador