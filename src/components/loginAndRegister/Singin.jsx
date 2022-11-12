import React from 'react'
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'
import icono from '../../img/icono2.png'
import telefono from '../../img/Vector.png'
import './style.scss'
const Singin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=(data)=>{
    console.log(data)
    navigate('/confirmacion')
  }
  return (
    <div className='singin'><img src={icono} className='singin__icono'/>
    <div className='singin__titulo'>Sing in</div>
    <div className='singin__text'>Login or create an account with your
 phone number to start ordering</div>
 <form onSubmit={handleSubmit(onSubmit)}>
 <label>
 <img src={telefono} className='singin__img'/>
<input type='number' className='singin__number' {...register("number")}
/>
</label>
<button className='button' type='submit'>dsada</button>
 </form>
 </div>
  )
}

export default Singin