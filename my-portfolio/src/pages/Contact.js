import React from 'react';
import '/Users/miguelbonilla/Desktop/Coding/portfolio/my-portfolio/src/styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to work together, feel free to reach out!</p>
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
    );
};

export default Contact;