import { logDOM } from '@testing-library/dom';
import React from 'react';
import "./Header.css";

// import logo from "../..//images/logo/logo.jpg";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle= {
        fontWeight: "bold",
        color: "rgb(221, 5, 5)"
    }
    return (
        <div>
            <div className="MenuBar-container  ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
            <div className="logo-img mt-2">
                {/* <img className="w-50 rounded-circle" src={logo} alt="" /> */}
            </div>
        </div>
        <div className="col-md-10 mt-2">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink activeStyle={activeStyle} to="/home" className="items">
                  <li>Home</li>
                </NavLink >
                <NavLink activeStyle={activeStyle} to="/about" className="items">
                  <li>About us</li>
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/Service" className="items">
                  <li>Service</li>
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/contact" className="items">
                  <li>Contact us</li>
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/login" className="items">
                  <li>Login</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>    
        </div>

    );
};

export default Header;