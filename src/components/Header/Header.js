import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a style={{fontSize: '28px', fontWeight: '500'}} class="navbar-brand w-25" href="#">Food Desire</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav justify-content-end w-75">
                    <li class="nav-item">
                    <Link class="nav-link active" style={{color:'black', fontSize: '20px'}} aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" style={{color:'black', fontSize: '20px'}} to="/order">Orders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" style={{color:'black', fontSize: '20px'}} to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                    {logInUser.email ? <strong style={{color: 'green',textDecoder: 'underline',marginTop:'20px'}}>{logInUser.email}</strong> : 
                    <Link to='/login'><button className='btn btn-success' style={{fontSize:'20px'}}>Login</button></Link>}
                    </li>
                </ul>
                </div>
             </div>
            </nav>
        </div>
    );
};

export default Header;