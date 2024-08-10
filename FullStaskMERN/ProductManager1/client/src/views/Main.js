import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';

import axios from 'axios';
export default () => {
    //   const [newProduct, setNewProduct] = useState({})
    const [products, setProducts] = useState([])


    const addProduct = (newProduct) => {
        setProducts([...products,newProduct]) ; 
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/products') 

            .then(res=>{
                setProducts(res.data)
                console.log(res.data)
            })
            .catch(err=>console.log(err))

    
    } , [])



    return (
        <div>
        <ProductForm addProduct={addProduct}></ProductForm>
        <hr></hr>
        <AllProducts products={products}></AllProducts>
        </div>
    )
}

