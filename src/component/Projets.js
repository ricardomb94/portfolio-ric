import React, { Component } from 'react';
import product from '../Fullstack/product';
import './Projets.css';



class Projets extends Component {
    render() {
        return (
            <section className="section3">
                <h2>Mes Réalisations</h2>
                <article className="project">
                    {/*<div className="single">zandoo</div>
                    <div className="single">vod</div>
                    <div className="single">puissance 4</div>
                    <div className="single">api</div>
        <div className="single">mag</div>*/}
                    {
                        product.map((item,i)=>
                            <div key={i} className="single">
                                <img src={`media/${item.img}`} alt={item.name}className="pic"/>
                            </div>
                        ) 
                    }    
                </article>
            </section>
        )
    }
}

export default Projets;