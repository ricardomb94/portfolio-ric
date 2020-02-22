import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import ToggleButton from '../Mobile-nav/ToggleButton'
import './Navbar.css';

class  Navbar extends Component {
    render() {
        return (
            <header className="toolbar">
        
            <nav className="toolbar_nav">
                <div className="toolbar_toggle-button">
                <ToggleButton /> 
                </div>
                <div className="toolbar_logo"><a href="/">Ricardo M'BOUKOU<br/>Développeur JavaScript</a></div>
                <div className="spacer"></div>
                
                <div className="toolbar_nav-items">
                    <ul>
                        <li>
                            <a href="/">accueil</a>
                        </li>
                        <li>
                            <a href="/technos">technos</a>
                        </li>
                        <li>
                            <a href="/projets">projets</a>
                        </li>
                        <li>
                            <a href="/contact">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
}

export default Navbar;