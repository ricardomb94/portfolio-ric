import React, { Component } from 'react'
import './Toggle-button.css'

export default class ToggleButton extends Component {
    render() {
        return (
            <div>
                <button className="toggle-button">
                     <div className="toogle-button_line"/>
                     <div className="toogle-button_line"/>
                     <div className="toogle-button_line"/>
                 </button> 
            </div>
        )
    }
}







// import React from 'react';
// import './Toggle-button.css';

// const toggleButton = props => (
    
    
//     <button className="toggle-button" onClick={props.click}>
//         <div className="toogle-button_line"/>
//         <div className="toogle-button_line"/>
//         <div className="toogle-button_line"/>
//     </button> 
  
// );


// export default toggleButton;
