import React from 'react'
import './Toggle-button.css'


    const toggleButton = props => (
            <div>
                <button className="toggle-button" onClick={props.click}>
                     <div className="toogle-button_line"/>
                     <div className="toogle-button_line"/>
                     <div className="toogle-button_line"/>
                 </button> 
            </div>
        )
   


export default toggleButton;





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
