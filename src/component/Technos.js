import React, { Component } from 'react';
import './Technos.css'

const Title = "Technos";
export class Technos extends Component {
    
    render() {
        return (
            <div>
                <h2>{Title}</h2>
                <section className="section2">
                    <article className="stack front">
                        <p>Technos Front-End</p>
                        <div className="stack-1 item">HTML</div>
                        <div className="stack-2 item">CSS</div>
                        <div className="stack-3 item">JavaScript</div>
                        <div className="stack-3 item">JQuery</div>
                        <div className="stack-4 item">Reactjs</div>
                        <div className="stack-4 item">Reactjs</div>
                        <div className="stack-4 item">php</div>
                    </article>
                    
                    <article className="stack back">
                        <p>Technos Back-End</p>
                        <div className="stack-1 item">Nodejs</div>
                        <div className="stack-2 item">Express</div>
                        <div className="stack-3 item">Bodyparser</div>
                        <div className="stack-3 item"></div>
                        <div className="stack-4 item">php</div>
                        <div className="stack-4 item">php</div>
                        <div className="stack-4 item">php</div>
                    </article>
                </section>
            </div>
        );
    }
}

export default Technos;
