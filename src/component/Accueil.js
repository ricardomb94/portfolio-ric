import React, { Component } from 'react';
import presentation from './Identite/presentation'
// import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import './Accueil.css';



 class Accueil extends Component {
    render() {
        return (
          <section className="section1 wrapper">
          <Fade left cascade>
            <div  className="text-content">
              <h2>En bref</h2><hr/>{
                  presentation.map((item, i) => 
                      <div key={i}>
                        {item.title}
                      </div>
                     )}
                    <hr/>
                     </div>
                     </Fade>
                     {/*<Fade right cascade duration={2000}>
                
                    <div className="image-content">
                      <img src={`./media/blouson.jpg`} alt="myPic" />
                    </div>
              </Fade>*/}
          </section>
           
        )
    }
}

export default Accueil;


