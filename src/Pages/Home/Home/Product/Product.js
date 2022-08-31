import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './product.css'
const Product = () => {
    const [products,setProduct] = useState([])
     useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
               .then(res=>res.json())
               .then(data=>setProduct(data))
     },[])
 
    return (
        <div className="container">
            <div className="card ">
                
            </div>
            <div className="">
            {
                    products.map(product => <Products
                    
                 
                    product={product}
                    >

                    </Products>)
                }
                
                </div>
            </div>
      
    );
};

export default Product;