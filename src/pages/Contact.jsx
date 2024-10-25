// pages/Contact.jsx
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  return (
    <section className="contact container">
      <SectionTitle title="Contact Us" subtitle="We’d love to hear from you" />
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
