import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import TopBar from '../Shared/TopBar/TopBar';
import ChooseArtwork from './ChooseArtwork';
import ChooseMethod from './ChooseMethod';
import ChooseType from './ChooseType';

const OthersChoose = () => {
    return (
        <>
        <TopBar/>  
        <NavBar/>
        <ChooseMethod/>
        <ChooseArtwork/>
        <ChooseType/>
        <Footer/>
     </>
    );
};

export default OthersChoose;