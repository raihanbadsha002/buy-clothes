import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import TopBar from '../Shared/TopBar/TopBar';

const HomeSection = () => {
    return (
        <>
           <TopBar/>  
           <NavBar/>
           <ProductCard/>
           <Footer/>
        </>
    );
};

export default HomeSection;