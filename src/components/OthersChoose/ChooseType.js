import React from 'react';
import Slide from 'react-reveal/Slide';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogoSection from './LogoSection';
import TextSection from './TextSection';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';

const ChooseType = () => {

  const routes = [
    {
      path: "/othersChoose/logo",
      exact: true,
      main: () => <LogoSection/>
    },
    {
      path: "/othersChoose/text",
      main: () => <TextSection/>
    }
  ];
   
    return (
      <>
      <Router>
           <div className="container py-5">
             <h3 className="mb-3">4.Choose application type</h3>
               <div className="row">
               <div className="col-md-6">
                   <Slide left>
                       <Link to="/othersChoose/logo" className="card d-flex flex-row align-items-center justify-content-evenly p-5 method_card nav-link active mb-lg-0 mb-2">
                         <div>
                           <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                         </div>
                          <div className="method__icon text-dark" >
                             <AcUnitIcon style={{fontSize:"3rem"}}/>
                          </div>
                          <div className="">
                              <h4 className="text-dark">Logo</h4>  
                          </div>
                       </Link>
                       </Slide>
                   </div>
                   <div className="col-md-6">
                   <Slide right>
                       <Link to="/othersChoose/text" className="card d-flex flex-row align-items-center justify-content-evenly p-5 method_card nav-link">
                         <div>
                           <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="" aria-label="..."/>
                         </div>
                          <div className="method__icon text-dark" >
                             <TextFieldsIcon style={{fontSize:"3rem"}}/>
                          </div>
                          <div className="">
                            <h4  className="text-dark">Text</h4> 
                          </div>
                       </Link>
                       </Slide>
                   </div>
               </div>  
               <div>   
               <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
                </Switch>   
            </div>
            <div className="my-3">  
             <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Special instructions</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Please let us know if you have any special requirements" ></textarea>
              </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Customization name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" />
              </div>
           </div>
           </div>
           </Router>
           <div className="container mb-4" style={{marginTop:"-2.1rem"}}>
            <div className="d-flex align-items-center justify-content-lg-between">
                    <div className="">
                      <Link to="/choosePosition" className="btn btn-light px-lg-5 px-3"><ArrowBackSharpIcon/> Back a step</Link>
                    </div>
                    <div className="">
                      <Link to="/shipment" className="btn btn-warning text-white px-lg-5 px-3">Shipment <ArrowRightAltSharpIcon/></Link>
                    </div>
                </div>
           </div>
          </> 
    );
};

export default ChooseType;