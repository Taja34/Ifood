import React from 'react'
import { useNavigate } from 'react-router-dom'
import mapa from '../../img/map.png'
const Service = () => {
  const navigate = useNavigate();

  const redirect =()=>{
navigate('/home')
  }
  return (
    <div className='service'><div className='service__cont'>
    <p className='service__cont__title'>Allow access to geo data on the device
mark your address on the map</p>
        <img src={mapa}/>
        <p className='service__cont__text'>Where i am ?</p>
    
    </div>
    <div className='button' onClick={redirect}>Confirm</div>
    </div>
    
  )
}

export default Service