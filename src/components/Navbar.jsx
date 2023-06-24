import { useState } from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import Button from "./Button";
import './Navbar.scss'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick(){
        setIsOpen(!isOpen)
    }
    return(
        <>
        <nav className="navbar">
            <h1 className="navbar-logo">Logo</h1>
            <div className="menu-button" onClick={handleClick}>
                {isOpen? <i className="fa fa-xmark"></i> : <i className="fa fa-bars"></i>}
            </div>
            <ul className={isOpen? 'nav-list active':'nav-list'} onClick={()=>setIsOpen(false)}>
                <li className="nav-items">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='/places'>Places</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='/services'>Services</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
            
        </nav>
        </>
    )
}

export default Navbar;
