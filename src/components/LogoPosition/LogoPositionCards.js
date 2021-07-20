import React from 'react';
import Fade from 'react-reveal/Fade';


const LogoPositionCards = (props) => {
    const {name, img} = props.logo;


    return (
        <>
          <div className="col-md-4">
          <Fade bottom>
          <div className="card mb-3 shadow_hover" style={{width: "22rem"}}>
                <img src={img} style={{width: "60%", margin: "0 auto"}} className="card-img-top" alt="ChooseLogo" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="">(applied to all)</p>
                    <p style={{marginBottom:".4rem"}}> <small className="text-dark">Application options</small></p>
                    <p> <span>◉ Print</span> <span>◉ Embroidery</span></p>
                    <div className="form-check position-relative">
                      <input className="form-check-input position-absolute" type="checkbox" defaultValue="" id="flexCheckDefault" />
                    </div>  
                </div>
           </div>
          </Fade>
          </div>  
        </>
    );
};

export default LogoPositionCards;