import React from 'react';
import './Side-Drawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
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