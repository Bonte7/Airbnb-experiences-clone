import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png';

function Nav() {
    return (
        <nav>
            <div className="navbar">
                <img className="navbar-logo" alt="" src={airbnbLogo} />
            </div>
        </nav>
    )
}

export default Nav;