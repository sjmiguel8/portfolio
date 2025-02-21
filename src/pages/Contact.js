import React from 'react';
import Header from '../components/Header';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;