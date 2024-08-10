import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");



    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', 
        {
            title,
            price,
            description

        })

    

            .then(res=> {
            props.addProduct(res.data)
            console.log(res)})
            .catch(err=>console.log(err))
            setTitle("")
            setDescription("")
            setPrice("")

    }
    return (

        <div className='justify-content-center text-center' >
            <h1 className='mt-5 mb-2'>Product Form</h1>
            <hr className='col-5 mx-auto mb-4'></hr>
            <div className='row justify-content-center text-center' >
                <form className='col-5' onSubmit={onSubmitHandler}>
                    <p className='form-group'>
                        <label>Title</label><br/>
                        <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </p>
                    <p>
                        <label>Price</label><br/>
                        <input type="number" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </p>
                    <p>
                        <label>description</label><br/>
                        <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                    </p>
                    <input className='btn btn-info' type="submit" />
                </form>
            </div>
        </div>
    )
}

