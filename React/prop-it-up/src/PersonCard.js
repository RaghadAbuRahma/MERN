
import { useState } from 'react'
import styles from './PersonCard.module.css'

export default function PersonCard(props) {


    const {name,age,haircolor}=props;
    const [Birthday, setBirthDay] =useState(age);

    const BirthDay = () => {
      setBirthDay(Birthday+1) 

    }


  return (
    <div>
        <div className={styles.PersonCard}>
            <h3>Name : {name}</h3>
            <p>Age: {Birthday}</p>
            <p>hair-color :{haircolor} </p>
            <button onClick={BirthDay}>BirthDay Button for {name} </button>


        </div>
    </div>
  )
}


