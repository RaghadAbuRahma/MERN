import './App.css';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductForm from './components/ProductForm';
import { useState } from 'react';
function App() {




  return (
    
    <div className="container">
        <div className="row">
          {/* <ProductForm newProduct={setNewProduct}></ProductForm> */}
          <Routes>
              <Route path="/products" element={<Main/>} />
              <Route  path="/products/:id" element={<ProductDetails/>}/>
          </Routes>
        </div>
    </div>
  );
}
export default App;