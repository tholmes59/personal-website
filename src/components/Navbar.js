import React from 'react'
import { NavLink } from 'react-router-dom' 


const NavBar = () => {

    return (

        // <header class="header">
        //     {/* <a href="" class="logo">CSS Nav</a> */}
        //     <input class="menu-btn" type="checkbox" id="menu-btn" />
        //     <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        //     <ul class="menu">
        //         <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        //         <li className="nav-item"><NavLink to="/about">About</NavLink></li>
        //         <li className="nav-item"><NavLink to="/experience">Experience</NavLink></li>
        //         <li className="nav-item"><NavLink to="/projects">Projects</NavLink></li>
        //         <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
        //     </ul>
        // </header>

        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink to="/experience">Experience</NavLink></li>
                <li className="nav-item"><NavLink to="/projects">Projects</NavLink></li>
                <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;