import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

const Shipment = () => {
    return (
        <>
         <div className="container">
             <div className="row d-flex justify-content-center align-items-center my-5">
                 <div className="col-md-10">
                     <div className="card shadow-lg px-4 py-3">
                         <div className="mx-lg-5 mx-0 mb-3">
                             <h3 className=" rounded-pill text-center text-uppercase bg-warning text-white mx-2 my-3 py-1">Shipment Details</h3>
                         </div>
                     <div className="mt-4">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name *</label>
                                <input type="text" className="form-control" id="firstName" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name *</label>
                                <input type="text" className="form-control" id="lastName" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email *</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone *</label>
                                <input type="text" className="form-control" id="phone" required/>
                            </div>
                            <div className="row g-3">
                                <h5>Product Info:</h5>
                                <div className="col-md-6">
                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                    <input type="text" className="form-control" id="productName"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="productCode" className="form-label">Product Code</label>
                                    <input type="text" className="form-control" id="productCode"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="color" className="form-label">Color</label>
                                    <input type="text" className="form-control" id="color"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="size" className="form-label">Size</label>
                                    <input type="email" className="form-control" id="size"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
                                    <input type="text" className="form-control" id="productQuantity"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="price" className="form-label">Total Price</label>
                                    <input type="text" className="form-control" id="price"/>
                                </div>
                            </div>
                            <div className="mb-2">
                              <textarea className="form-control" id="address" rows="2" placeholder="Your Address...."></textarea>
                            </div>
                            <div className="mb-2">
                              <textarea className="form-control" id="message" rows="4" placeholder="Your Message...."></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-warning px-4 text-white"><ShoppingCart/> Checkout</button>
                            </div>
                        </form>  
                     </div>
                   </div>
                </div>
              </div>
             <div className="mb-4">
                <Link to="/othersChoose" className="btn btn-light px-5"><ArrowBackSharpIcon/> Back a step</Link>
                </div>
            </div>
            
        </>
    );
};

export default Shipment;