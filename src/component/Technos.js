import React, { Component } from 'react';
import back from '../Fullstack/back';
import front from '../Fullstack/front';
import skills from '../Fullstack/skills';
import './Technos.css'
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';



const Title = "Technos";
export class Technos extends Component {
    
    render() {
        return (
            <div className="wrap"> 
            <h2>MES STACKS DE PREDILECTION</h2>
                <section className="section2">
                <Jump left cascade>
                    <article className=" front stack ">
                        <h3>Technos Front-End</h3>{
                         front.map((item, i) => 
                           <div key={i}>
                           <img src={`media/${item.img}`} alt={item.name} className="media"/>
                           </div>
                        )};
                    </article>
                </Jump>
                <Flip  right cascade>
                    <article className="front stack skills">
                    <h3>Les Outils</h3>{
                     skills.map((item, i) => 
                        <div key={i}>
                        <img src={`media/${item.img}`} alt={item.name} className="media"/>
                        </div>
                    )};
                    </article>
                </Flip>    
                <Jump left cascade>
                    <article className="back stack">
                    <h3>Technos Back-End</h3>{
                        back.map((item, i) => 
                        <div key={i}>
                        <img src={`media/${item.img}`} alt={item.name} className="media"/>
                        </div>
                    )};
                    </article>
                </Jump>
                
                </section>
            </div>
        );
    }
}

export default Technos;




{/*<section className="section1 wrapper">
            
              <h2>En bref</h2>{
                  presentation.map((item, i) => 
                      <div className="text-content" key={i}>
                            {item.title}
                      </div>      
                )}
                
                  <img src={`/media${}`} />
               
              </section>*/}
              
              
              {/*<div className="image-content"><img src={`./media/blouson.jpg`} alt="myPic" /></div>*/}