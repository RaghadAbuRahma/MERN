import React from 'react'

export default function Card(props) {


    const {name,age,haircolor}=props;
  return (
    <div>
        <div className='card'>
            <h1>name : {name}</h1>
            <p>Age: {age}</p>
            <p>hair-color :{haircolor} </p>

        </div>
    </div>
  )
}
