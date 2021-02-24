import React, { Component } from 'react';
import product from '../Fullstack/product';
import './Projets.css';
import { Image, Reveal} from 'semantic-ui-react';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
// import { idText } from 'typescript';



class ProjetsMove extends Component {
    render() {
        return (
            <section className="section3">
                <h2>Mes Réalisations</h2>
                <Zoom>
                    <Reveal animated='move' className="project">
                    
                        {/*<div className="single">zandoo</div>
                        <div className="single">vod</div>
                        <div className="single">puissance 4</div>
                        <div className="single">api</div>
            <div className="single">mag</div>*/}
                        {
                            product.map((item,i)=>
                            <div>
                                <Reveal.Content visible key={i} className="single">
                                <Pulse top cascade >
                                    <Image src={`media/${item.img}`} alt={item.name}className="pic"/>
                                </Pulse >
                                </Reveal.Content>
                                <Reveal.Content visible className="single" >
                                <Zoom>
                                    <p className="description">{item.text}</p>
                                </Zoom>
                                </Reveal.Content>
                                </div>   
                            )
                        } 
                        
                    </Reveal>
                    </Zoom>
                </section>
           
           
        )
    }
}

export default ProjetsMove;