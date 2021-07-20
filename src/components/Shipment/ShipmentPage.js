import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import TopBar from '../Shared/TopBar/TopBar';
import Shipment from './Shipment';

const ShipmentPage = () => {
    return (
        <>
           <TopBar/>  
           <NavBar/>
           <Shipment/>
           <Footer/>
        </>
    );
};

export default ShipmentPage;