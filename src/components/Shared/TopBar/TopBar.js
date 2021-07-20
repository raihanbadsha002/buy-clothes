import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const TopBar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-warning py-4">
              <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-3">
                  <Link className="navbar-brand text-white" to="/" style={{fontSize:"2rem"}}> <span>BUY</span><span className="text-dark">CLOTHES</span> </Link>
                </div>
                  <div className="col-md-9 d-flex justify-content-start justify-content-md-end">
                    <form className="d-flex">
                      <input className="form-control me-2 pr-5" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-dark" type="submit"><SearchIcon/></button>
                    </form>
                  </div>
              </div>   
            </div>
         </nav>   
       </>
    );
};

export default TopBar;