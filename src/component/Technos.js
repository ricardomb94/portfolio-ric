import React, { Component } from 'react';
import back from '../Fullstack/back';
import front from '../Fullstack/front';
import skills from '../Fullstack/skills';
import './Technos.css'
import { Item } from 'semantic-ui-react';

const Title = "Technos";
export class Technos extends Component {
    
    render() {
        return (
            <div>
                <h2>{Title}</h2>
                <section className="section2">
                    <article className="stack front">
                        <h3>Technos Front-End</h3>{
                         front.map((item, i) => 
                           <div key={i}>
                           <img src={`media/${item.img}`} alt={item.name} className="media"/>
                           </div>
                        )};
                    </article>
                    <article className="stack back">
                        <h3>Technos Back-End</h3>{
                            back.map((item, i) => 
                              <div key={i}>
                              <img src={`media/${item.img}`} alt={item.name} className="media"/>
                              </div>
                           )};
                    </article>
                    <article className="stack front">
                        <h3>Les Outils</h3>{
                         skills.map((item, i) => 
                           <div key={i}>
                           <img src={`media/${item.img}`} alt={item.name} className="media"/>
                           </div>
                        )};
                    </article>
                </section>
            </div>
        );
    }
}

export default Technos;
