import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <nav>
            <h1>Studio Ghibli</h1>
            <ul className="nav-links">
                <Link to="/" style={linkStyle}><li>Home</li></Link>
                <Link to="/films" style={linkStyle}><li>Films</li></Link>
                <Link to="/characters" style={linkStyle}><li>Characters</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar;