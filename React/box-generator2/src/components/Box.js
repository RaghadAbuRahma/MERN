import React, {useState} from 'react'
import StyledBox from './styledBox';
import styles from './Box.module.css'


const Box = (props) => {
    const [color, setColor] = useState("");
    const [colors, setColors] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, color])
        console.log(colors)
        setColor("")

    };

    const handleChange = (e) => {
        setColor(e.target.value)
    }


    

    return (

        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>Color: </label> 
                    <input type="text" value={color} onChange={ handleChange } />
                </div>
                <input type="submit" value="Create Box" />
            </form>
            <div className={styles.boxes}>
                {colors.map((colorx, index) => 
                <StyledBox id={index} backgroundcolor={colorx}></StyledBox>)}
            </div>


    </div>
)
}


export default Box;