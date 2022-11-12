import React from 'react'
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'
import icono from '../../img/icono2.png'
import telefono from '../../img/Vector.png'
import './style.scss'
const Confimacion = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=(data)=>{
    console.log(data)
    navigate('/register')
  }
  return (
    <div className='singin'><img src={icono} className='singin__icono'/>
    <div className='singin__titulo'>Verification</div>
    <div className='singin__text'>Enter the four-digit code from SMS
SMS not received.<b> Send again?</b></div>
 <form onSubmit={handleSubmit(onSubmit)}>
 <label>

<input type='number' className='singin__number' {...register("codigo")}
/>
</label>
<button className='button' type='submit'>dsada</button>
 </form>
 </div>
  )
}

export default Confimacion