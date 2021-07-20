import React from 'react'
import ProductAllCard from './ProductAllCard';
import './ProductCard.css'
import products from './ProductData'


const ProductCard = () => {
    
    return (
        <>
        <div className="container py-5">
            <div className="row">
                {
                    products.map(product => 
                     <ProductAllCard
                         key={product.id}
                         product={product}
                     />)
                }
            </div>
        </div>
           
        </>
    );
};

export default ProductCard;