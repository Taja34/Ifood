import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgStep from '../../img/stepper1.png'
import imgStep2 from '../../img/stepper2.png'
import imgStep3 from '../../img/stepper3.png'
import './style.scss'

const Stepper = () => {
  // let ste =[{
  //   titulo:'Choose what to eat choosing from a variety of restaurants from the list',
  //   img:'../../img/stepper1.png'
  // },
  // {
  //   titulo:'Choose where you want to deliver by indicating on the map',
  //   img:{imgStep2}
  // },
  // {
  //   titulo:'We will deliver as soon as possible',
  //   img:{imgStep3}
  // }]
  // const [steper,setSteper] = useState([ste[0]])
const navigate = useNavigate()
  const[count,setCount] = useState(1);
  const cambio =()=>{
    setCount(count+1)
    if(count===3){
navigate('/singin')
    }
  }

  return (
    <>
   

 
    {count === 1 && <>  <div > <img src={imgStep} className='firstStep'/>  <p className='firstStep__text' >Choose what to eat choosing from 
a variety of restaurants from the list</p></div> <div className='firstStep__text__bolita'>
<div className='firstStep__text__bolita__a'></div>
<div className='firstStep__text__bolita__s'></div>
<div className='firstStep__text__bolita__s'></div>

</div> </>}
    {count === 2 && <>  <div > <img src={imgStep2} className='firstStep'/>  <p className='firstStep__text'>Choose where you want to deliver
 by indicating on the map</p></div>  <div className='firstStep__text__bolita'>
<div className='firstStep__text__bolita__s'></div>
<div className='firstStep__text__bolita__a'></div>
<div className='firstStep__text__bolita__s'></div>

</div></>}
    {count === 3 && <>  <div > <img src={imgStep3} className='firstStep'/>  <p className='firstStep__text'>We will deliver as soon as possible</p></div>  <div className='firstStep__text__bolita'>
<div className='firstStep__text__bolita__s'></div>
<div className='firstStep__text__bolita__s'></div>
<div className='firstStep__text__bolita__a'></div>

</div></>}
<div className='firstStep__text__bolita__button' onClick={cambio}> Next</div>
</>  )
}

export default Stepper