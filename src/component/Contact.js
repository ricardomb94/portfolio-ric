import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h2 className="brand">Ricardo Web Developpeur</h2>
                <section className="contact-wrapper">
                    <article className="personal-info">
                        <h3>Let's get in touch</h3>
                        <ul>
                            <li>Mon adresse</li>
                            <li>Mon numéro de téléphone</li>
                            <li>Ricardomb@gmail.com</li>
                        </ul>
                    </article>
                    <article className="contact">
                        <h3>Email me</h3>
                        <form>
                                <label>Nom</label>
                                <input type="text" name="name" />
                                <label>Adresse mail</label>
                                <input type="email" name="email" />
                                <label>Téléphone</label>
                                <input type="text" name="phone" />
                                <label>Message</label>
                                <textarea name="message"></textarea>
                                <button>Envoyez</button>
                        </form>
                        
                    </article>
                </section>
            </div>
        )
    }
}
