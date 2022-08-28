import React, { useEffect, useState } from 'react';
import ItemContainer from '../ItemContainer/ItemContainer';
import './product.css'
const Product = () => {
    const [product,setProduct] = useState([])
  useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProduct(json))
  
   } ,[])
 
    return (
        <div className="shadow border">
            <div className="img-container">
                
            </div>
            <div className="card-info p-2">
                {
                    product.map(product=><ItemContainer
                  
                    product={product}
                    
                    >

                    </ItemContainer>)
                }
                
                </div>
            </div>
      
    );
};

export default Product;