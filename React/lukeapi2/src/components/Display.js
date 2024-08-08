import React from 'react'

function Display(props) {
  return (

    <div>
      
        {Object.keys(props.data).slice(0 , 4).map((index) => 
          <p><h4>{index}</h4>{props.data[index]}</p>)}
        
      
    </div>
  )
}

export default Display
