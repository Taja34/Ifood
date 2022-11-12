import React from 'react'
import mapa from '../../img/map.png'
const service = () => {
  return (
    <div className='service'><div className='service__cont'>
    <p className='service__cont__title'>Allow access to geo data on the device
mark your address on the map</p>
        <img src={mapa}/>
        <p className='service__cont__text'>Where i am ?</p>
    
    </div>
    <div className='button'>Confirm</div>
    </div>
    
  )
}

export default service