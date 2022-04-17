import React from 'react';
import {Link} from 'react-router-dom';



function Navbar({cart}) {
    
    return (
        <nav className="navbar">
            <Link to="/"><img src="./images/eye.gif" alt="" /></Link>
            <div className="links">
                <Link to="/">Profiles </Link>
                <Link to="/comparaison">Comparaison</Link>
            </div>
        </nav>
    )
}

export default Navbar