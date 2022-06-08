import { React } from 'react'; //import React library
import { NavLink } from "react-router-dom";

// Creates the navbar with it's link to other pages
export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="https://0201.nccdn.net/1_2/000/000/12a/b91/eastside-dog-web-logo----white-outline-ver-6.jpg#RDAMDAID26812478" alt="Eastside Dog Logo" className="logo"/></a>

                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}