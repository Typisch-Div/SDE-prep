import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Pages.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setMessage('');
  };

  return (
    <div className="page contact-page">
      <h1>Get In Touch </h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p> Email: sdivanshu558@gmail.com</p>
          <p> LinkedIn: <a href="https://www.linkedin.com/in/divanshu-sharma-5580212d/" target="_blank" rel="noopener noreferrer">Divanshu Sharma</a></p>
          <p> GitHub: <a href="https://github.com/Typisch-Div" target="_blank" rel="noopener noreferrer">Typisch-Div</a></p>
          <p> Location: Faridkot, Punjab</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <Link to="/" className="btn btn-secondary">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Contact;