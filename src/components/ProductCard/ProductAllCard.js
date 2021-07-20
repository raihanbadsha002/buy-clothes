import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import Fade from 'react-reveal/Fade';



const ProductAllCard = (props) => {
    const{name, code, price, img} = props.product;

    const dataPass = (params) => {
        
    }
    

    const [count, setCount] = useState(1);

    const incrementCounter = () => setCount(count + 1);
    let decrementCounter = () => setCount(count - 1);
    if(count<=0) {
        decrementCounter = () => setCount(0);
      }


      const addToCart = () => {
        if(count<= 0){
            alert( "Please Add Product Quantity")
        }
        if(count >= 1){
            alert( "First Add Your Desired Logo. Click The 'ADD YOUR LOGO' Button")
        }
        

      }
      
      
    return (
        <>
           <div className="col-md-6">
            <Fade bottom>
                <div className="card shadow mb-3" style={{maxWidth: "650px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start mt-4" alt="ProductImage" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Product Code: {code}</p>
                            <div className="row">
                                <div className="col-6">
                                <label htmlFor="inputState" className="form-label">COLOR</label>
                                 <select id="inputState" className="form-select">
                                    <option defaultValue="" selected>BLACK</option>
                                    <option defaultValue="">BLUE</option>
                                    <option defaultValue="">GREEN</option>
                                    <option defaultValue="">ORANGE</option>
                                    <option defaultValue="">CRANBERRY</option>
                                    <option defaultValue="">GOLD</option>
                                    <option defaultValue="">PINK</option>
                                 </select>
                                </div>
                                <div className="col-4"> 
                                <label htmlFor="inputState" className="form-label">SIZE</label>
                                 <select id="inputState" className="form-select">
                                    <option defaultValue="" selected>XS</option>
                                    <option defaultValue="">S</option>
                                    <option defaultValue="">M</option>
                                    <option defaultValue="">L</option>
                                    <option defaultValue="">XL</option>
                                    <option defaultValue="">2XL</option>
                                    <option defaultValue="">3XL</option>
                                    <option defaultValue="">4XL</option>
                                 </select>
                                </div>
                          </div>
                          <div className="row py-2">
                              <div className="col-6">
                              <span className="text-uppercase">Quantity</span>
                              <div className="d-flex align-items-center mt-2">
                                <button className="counter_btn" onClick={decrementCounter}>-</button>
                                <span className="count__number px-3">{count}</span>
                                <button className="counter_btn" onClick={incrementCounter}>+</button>
                            </div>
                              </div>
                          </div>
                          <div className="row d-flex align-items-center justify-content-end">
                              <div className="col-6">
                                  <span className="fw_bold">£{price}</span> <small>per item</small>
                              </div>
                              <div className="col-6">
                                  <small>Total:</small> <span className="fw_bold text-success">£{(count*(price)).toFixed(2)}</span> <small>ex</small>.<span>VAT</span>
                              </div>
                          </div>
                         <div className="row d-flex align-items-center justify-content-end py-3">
                             <div className="col-6">
                                <Link to="/choosePosition" onClick={dataPass} className="btn btn-warning text-white text-uppercase">Add your logo</Link>
                             </div>
                             <div className="col-6">
                               <Link to="/" className="btn btn-light text-uppercase" onClick={addToCart}>Add to Basket</Link>
                             </div>
                         </div>
                        </div>
                        </div>
                    </div>
                  </div>
                </Fade>
                </div> 
            </>
    );
};

export default ProductAllCard;