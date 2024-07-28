import React from 'react'
import Card from './Card'
export default function PersonCard() {
  return (
    <div className='cards'>
        
        <Card name={'Raghad Abu rahma'} age={'18'} haircolor={'white'}/>
        <Card name={'Mohammad Tabakhna'} age={'48'} haircolor={'Black'}/>
        <Card name={'Shatha Bast'} age={'18'} haircolor={'Gold'}/>
        <Card name={'Muath Ademar'} age={'18'} haircolor={'Blue'}/>
    
    </div>
  )
}
