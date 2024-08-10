import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import React from "react";
import {

Link 
} from "react-router-dom";

function AllProducts(props) {

    //variable to save the products
    // const [products, setProducts] = useState([])






return (
    <div className='justify-content-center text-center'>
        <h1>All Products</h1>
        <ul className="list-group">
            {props.products.map((product, index) => 
            <li className="list-group-item" key={index}><Link to={"/products/" + product._id}>{product.title}</Link></li>)}
        </ul>
    </div>
)
}

export default AllProducts