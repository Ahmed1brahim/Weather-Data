import React from  'react';

const Weather = (props)=>{
      return(
        <div className='info'>
          {props.city && <p className='info-key'>City :<span className='info_value'>{props.city}</span></p>}
          {props.country  && <p className='info-key'>Country :<span className='info_value'>{props.country}</span></p>}
          {props.humidity  && <p className='info-key'>Humidity :<span className='info_value'>{props.humidity}</span></p>}
          {props.description  && <p className='info-key'>Description :<span className='info_value'>{props.description}</span></p>}
          {props.temperature  && <p className='info-key'>Temperature :<span className='info_value'>{props.temperature}</span></p>}
          {props.error  && <p className='error-key'>Error :{props.error}</p>}
        </div>
        )
  
}

export default Weather; 