import React, { Component } from 'react';
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';
import './Accueil.css';



 class Accueil extends Component {
    render() {
        return (
          <section className="section1 wrapper">
          <Bounce left>
            <div className="text-content accueil">
            <h2>En bref</h2>
            <hr/>
            <div className="item-a"><p>What this will do is extend the first image across the entire row. You are telling the grid that the image will start at the first grid line and end at the third grid line. Here’s how it will look..</p></div>
            <hr/>
            
            <div className="item-b"><p>What this will do is extend the first image across the entire row. You are telling the grid that the image will start at the first grid line and end at the third grid line. Here’s how it will look.</p></div> 
            </div>
          </Bounce>
           
          <Pulse>
            <div className="image-content"><img src={`./media/blouson.jpg`} alt="myPic" /></div>
            </Pulse>
          </section>
           
        )
    }
}

export default Accueil;


