import React, { useState } from 'react'
import Card from './Card'

export default function PersonCard(props) {



  return (
    <div className='cards'>


        
        <Card name={'Raghad Abu rahma'} age={'18'} haircolor={'white'}/>
        <Card name={'Mohammad Tabakhna'} age={'48'} haircolor={'Black'}/>
        <Card name={'Shatha Bast'} age={'20'} haircolor={'Gold'}/>
        <Card name={'Muath Ademar'} age={'33'} haircolor={'Blue'}/>
        
    
    </div>
  )
}
