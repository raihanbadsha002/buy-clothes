import React, { lazy, Suspense} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogoPositionSec from './components/LogoPosition/LogoPositionSec';
import OthersChoose from './components/OthersChoose/OthersChoose';
import ShipmentPage from './components/Shipment/ShipmentPage';
import LazyLoader from './components/LazyLoader/LazyLoader';
const HomeSection = lazy(()=> import( './components/HomeSection/HomeSection'));

const App = () => {
    return (
      <Router>
       <Switch>
         <Route exact path="/" >
          <Suspense fallback={ <> <LazyLoader/> </>}>
            <HomeSection/> 
          </Suspense> 
         </Route>
         <Route path="/choosePosition" >
           <LogoPositionSec/> 
         </Route>
         <Route path="/othersChoose" >
           <OthersChoose/> 
         </Route>
         <Route path="/shipment" >
           <ShipmentPage/> 
         </Route>
       </Switch>
      </Router>
           
        
    );
};

export default App;