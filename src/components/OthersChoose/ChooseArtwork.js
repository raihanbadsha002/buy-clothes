import React from 'react';
import Slide from 'react-reveal/Slide';

const ChooseArtwork = () => {
    return (
        <>
           <div className="container">
           <h3 className="mb-3">3.Choose artwork</h3>
            <p><b>Add your</b> logo/text</p>
               <div className="row">
                <Slide bottom>
                   <div className="col-md-12 card method_card">
                       <div className="row">
                         <div className="col-md-6">
                             <div className="d-flex flex-row align-items-center justify-content-evenly p-4">
                             <div>
                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                             </div>
                                <div className="artwork__icon" >
                                    <span>NEW</span>
                                </div>
                                <div className="">
                                    <p style={{fontSize:"1rem", fontWeight:"lighter"}}>Add a new customization.</p>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-6 d-flex align-items-center justify-content-center">
                               <p className="text-success">+ £8.95 One-Time Logo Setup Free</p>
                           </div>
                       </div>
                   </div>
                   </Slide>
                   <p className="py-3"><input className="form-check-input mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>or choose to have no customization</p>
               </div>
         </div> 
        </>
    );
};

export default ChooseArtwork;