import React from 'react';
import logo from '../../../src/logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div className='logo'>
            <img src={logo} alt=""/>

         <div className="menubar">
                <nav id="navmenu" className="navbar navbar-expand-lg  ">
            
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link active" href='/course'>Course</a>
                <a className="nav-link active" href="/Details">Details of enrollment</a>
                
                </div>
             </div>
             </nav>
        </div>
            
        </div>
    );
};

export default Header;