import React, { useRef } from 'react'; // Import useRef hook
import Header from '../components/Header';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
    const form = useRef(); // Create a reference to the form

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // EmailJS configuration - replace with your actual keys
        emailjs.sendForm('service_wfmn8e5', 'template_gto2opf', form.current, 'vT8ZfUVD2aR0Qx6XR')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!'); // Optional: Alert the user
                form.current.reset(); // Clear the form after successful submission
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.'); // Optional: Alert the user
            });
    };

    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form className="contact-form" ref={form} onSubmit={sendEmail}> {/* Add ref and onSubmit */}
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