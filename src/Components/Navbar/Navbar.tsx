import React from "react"
import { NavLink } from "react-router-dom"



const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                    <div className="navbar-brand" >
                        Navbar
                        </div>
                    <ul className=" d-flex align-items-center nav__items">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/todos" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar