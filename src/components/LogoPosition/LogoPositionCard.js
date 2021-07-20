import React from 'react';
import { Link } from 'react-router-dom';
import LogoPositionCards from './LogoPositionCards';
import logos from './LogoPositionData';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';

const LogoPositionCard = () => {
    return (
        <>
          <div className="container py-5">
             <h3 className="mb-3">1.Choose position(s)</h3>
              <div className="row">
                  {
                   logos.map(logo => 
                    <LogoPositionCards
                        key={logo.id}
                        logo={logo}
                    />
                   )
                  }
              </div>
              <div className="d-flex align-items-center justify-content-lg-between">
                  <div className="">
                    <Link to="/" className="btn btn-light px-lg-5 px-3"><ArrowBackSharpIcon/> Back a step</Link>
                  </div>
                  <div className="">
                     <Link to="/othersChoose" className="btn btn-warning text-white px-lg-5 px-3">Continue <ArrowRightAltSharpIcon/></Link>
                  </div>
              </div>
          </div>  
        </>
    );
};

export default LogoPositionCard;