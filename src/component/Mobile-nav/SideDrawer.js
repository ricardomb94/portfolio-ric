import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    
    return(
        <nav className="side-drawer">
            <ul>
                <li><a href="/">accueil</a></li>
                <li><a href="/">mes technos</a></li>
                <li><a href="/">mes projets</a></li>
                <li><a href="/">contact</a></li>
            </ul>
        </nav>
    );
}


export default  sideDrawer;