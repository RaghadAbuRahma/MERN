import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PlayerForm(props) {

    const [errors, setErrors] = useState([])
    // const navigate = useNavigate();
    const { initialName, initialPosition, onSubmitProp } = props;

    const [name, setName] = useState(initialName)
    const [position, setPosition] = useState(initialPosition)



    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({name, position});
        setName("")
        setPosition("")
    }
    // console.log(onSubmitProp);


return (
    <div> 
    <form onSubmit={onSubmitHandler}>
    {props.errors.map((err, index) => <div key={index} className="alert alert-danger">{err}</div>)}
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="position" className="form-label">Position:</label>
        <input
            type="text"
            className="form-control"
            id="position"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
        />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form></div>

)
}



export default PlayerForm