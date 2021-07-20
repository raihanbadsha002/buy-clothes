import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        All Products
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Brands</Link></li>
                        <li><Link className="dropdown-item" to="/">T-Shirt</Link></li>
                        <li><Link className="dropdown-item" to="/">Trousers</Link></li>
                        <li><Link className="dropdown-item" to="/">Polo Shirt</Link></li>
                        <li><Link className="dropdown-item" to="/">Jackets</Link></li>
                        <li><Link className="dropdown-item" to="/">Footwear</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      T-Shirt
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Collection 1</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 2</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 3</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 4</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 5</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Trousers
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Collection 1</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 2</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 3</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 4</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 5</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Polo Shirt
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Collection 1</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 2</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 3</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 4</Link></li>
                       
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Jackets
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Collection 1</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 2</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 3</Link></li>
                       
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Footwear
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">Collection 1</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 2</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 3</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 4</Link></li>
                        <li><Link className="dropdown-item" to="/">Collection 5</Link></li>
                    </ul>
                    </li>
                   
                </ul>
                </div>
             </div>
            </nav>
        </>
    );
};

export default NavBar;