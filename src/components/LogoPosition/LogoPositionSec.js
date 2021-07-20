import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import TopBar from '../Shared/TopBar/TopBar';
import LogoPositionCard from '../LogoPosition/LogoPositionCard';
import Footer from '../Shared/Footer/Footer';


const LogoPositionSec = () => {
    return (
        <>
          <TopBar/>  
          <NavBar/>
          <LogoPositionCard/>
          <Footer/>
       </>
    );
};

export default LogoPositionSec;