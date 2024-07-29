
import React, { useState } from 'react'
export default function Card(props) {


    const {name,age,haircolor}=props;
    const [bDay, setBirthDay] =useState(age);

    const BirthDay = () => {
      setBirthDay(parseInt(bDay)+1) 

    }


  return (
    <div>
        <div className='card'>
            <h1>name : {name}</h1>
            <p>Age: {bDay}</p>
            <p>hair-color :{haircolor} </p>
            <button onClick={BirthDay}>BirthDay Button for {name} </button>


        </div>
    </div>
  )
}
