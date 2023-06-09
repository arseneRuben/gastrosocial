import { menuItems } from '../../menuItems'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import MenuItems from './menu/MenuItems'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // Get the user logged in
    console.log(user)
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand'><img src={logo} className="rounded" alt="logo" height="40"/></Link>
               
                <button type="button" className='navbar-toggler' data-bs-toogle="collapse" data-bs-target="#navbarCollapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id="navbarCollapse" className='collapse navbar-collapse'>
                    
                    <ul className="nav navbar-nav">
                    {menuItems.map((menu, index) => {
                        return <MenuItems items={menu} key={index} />;
                    })}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            <ShoppingCartIcon/>
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                    <ul className="nav navbar-nav ms-auto">
                    
                      {user!=null ? (
                            <>
                             <Link className="nav-link dropdown-toggle" to="/"  data-bs-toggle="dropdown">
                             <img src={user?.profile?.picture} alt="image" class="rounded-circle" height="40"/>
                             </Link>
                            <div className='dropdown-menu dropdown-menu-end'>
                               <Link className="dropdown-item" to="/profile">profile</Link>
                               <Link className="dropdown-item" to="/">Settings</Link>
                               <div className='dropdown-divider'></div>
                               <Link className="dropdown-item" to="/logout">Logout</Link>
                            </div>
                            </>
                            

                        ): (
                            <div className='dropdown-menu dropdown-menu-end'>
                               <Link className="dropdown-item" to="/auth">Login</Link>
                            </div>
                        )}
                         
                    </ul>
                    
                </div>
            </div>
      </nav>
    );
  };
  
  export default Navbar;