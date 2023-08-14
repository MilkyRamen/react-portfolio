import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <section id="contact">
                <h2>Contact Me</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />

                    <button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;