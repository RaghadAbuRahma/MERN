import React, {useState} from 'react'


const Box = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={ handleSubmit }>
        <div>
            <label>Color: </label> 
            <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } />
        </div>
        <input type="submit" value="Create Box" />
    </form>
)
}


export default Box;
