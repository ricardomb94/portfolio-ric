import React, { Component } from 'react';
import './Technos.css'


export class Technos extends Component {
    render() {
        return (
            <div>
                <h2>Technos</h2>
                <section className="section2">
                    <div className="stack tech-front"></div>
                    <div className="stack tech-back"></div>
                </section>
            </div>
        );
    }
}

export default Technos;
