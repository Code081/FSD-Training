import React from 'react'
import "./MainLayout.css";
import { Link, Outlet } from 'react-router-dom';
function MainLayout() {
return (
    <div>
        <h1>Welcome to Home Page</h1>
        <nav>
            <ul className='aa'>
                <li><Link to = "/login">LOGIN</Link></li>
                <li><Link to = "/registration">REGISTRATION</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
)
}

export default MainLayout