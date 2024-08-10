import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"; 
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";




function ProductDetails(props) {
    //variable to get the product 
    const [product, setProduct] = useState({})
    const { id } = useParams(); 
    const navigate = useNavigate();



    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ id) 
        .then(res=>{
            setProduct(res.data)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    } ,[id])

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                props.removeFromDom(id)
            })
            .catch(err => console.error(err));
            navigate("/products");

    }




return (
    <div className='my-3'>
      <h1>Product Details</h1>
      <hr className='col-8'></hr>
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Title:</h3>
        <h6 className='col-2'>{product.title}</h6>
      </div>
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Price:</h3>
        <h6 className='col-2'>{product.price}</h6>
      </div> 
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Description:</h3>
        <h6 className='col-2'>{product.description}</h6>
      </div> 
        <button className='btn btn-info'><Link to={"/products/" + product._id + "/edit"}>edit</Link></button> || 
        <button className='btn btn-info' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>

    </div>
)
}

export default ProductDetails