import React, { Component } from 'react';
import './Accueil.css';



 class Accueil extends Component {
    render() {
        return (
            <section className="section1">
            <h2>A propos</h2>
            <p className="text-content accueil">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis libero ac enim laoreet eleifend. Integer convallis sapien at rhoncus vehicula. Aenean commodo, purus a fringilla vestibulum, diam velit convallis nibh, dignissim pellentesque turpis mauris a est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce hendrerit mauris pulvinar purus accumsan consequat.
            Integer convallis sapien at rhoncus vehicula. 
            </p>
            
            <img src={`./media/blouson.jpg`} alt="myPic" className="image-content"/>
          </section>
           
        )
    }
}

export default Accueil;


