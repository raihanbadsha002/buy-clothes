import React from 'react';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ErrorIcon from '@material-ui/icons/Error';
import Slide from 'react-reveal/Slide';

const ChooseMethod = () => {
    return (
        <>
           <div className="container py-5">
             <h3 className="mb-3">2.Choose application method</h3>
              <h6 className="text-warning"><ErrorIcon/> Embroidery (stitching) isn't available for one of the below reasons:</h6>
               <ul>
                 <li>The garment weight (GSM) is too low to allow embroidery on this position.</li>
                 <li>Embroidery isn't an applicable on this product/bundle</li>
                 <li>You have chosen a Print only artwork position</li>
               </ul>
               <p>Please call us on <u className="text-warning">0800-028-5888</u>  if you wish to embroider this item we might be able to help!</p>
               <div className="row">
                   <div className="col-md-6">
                   <Slide left>
                       <div className="card d-flex flex-row align-items-center justify-content-evenly p-5 method_card mb-lg-0 mb-2">
                         <div>
                           <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                         </div>
                          <div className="method__icon" >
                             <BlurOnIcon style={{fontSize:"3rem"}}/>
                          </div>
                          <div className="">
                              <h5>Embroidery (Stitching)</h5>
                              <p>Detailed and durable ideal for uniforms.</p>
                          </div>
                       </div>
                       </Slide>
                   </div>
                   <div className="col-md-6">
                   <Slide right>
                       <div className="card d-flex flex-row align-items-center justify-content-evenly p-5 method_card">
                         <div>
                           <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                         </div>
                          <div className="method__icon" >
                             <ColorLensIcon style={{fontSize:"3rem"}}/>
                          </div>
                          <div className="">
                              <h5>Print</h5>
                              <p>Vivid and flexible ideal for general use.</p>
                          </div>
                       </div>
                       </Slide>
                   </div>
               </div>
           </div> 
        </>
    );
};

export default ChooseMethod;