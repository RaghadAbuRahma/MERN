import {React} from 'react'
import axios from 'axios';
import { useState} from 'react';
import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';



function AuthorForm(props) {
    const navigate = useNavigate();
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName)

    console.log(props.errors)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(name);
        setName("")

    }



return (
    <div className="container mt-4">
    <h4 className="mb-4">{props.header}</h4>
    <Link to={"/authors"} className=" mb-5">Home</Link>
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
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)
}

export default AuthorForm