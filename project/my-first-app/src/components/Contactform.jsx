
import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-form-card">
      <h2>Contact Me</h2>

      {submitted && (
        <div className="success-message">
          ✅ Message sent successfully! Thank you for reaching out.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Subject Input */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className={errors.subject ? 'input-error' : ''}
          />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>

        {/* Message Textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here... (at least 10 characters)"
            rows="6"
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
          <span className="char-count">
            {formData.message.length}/500 characters
          </span>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="btn btn-primary btn-submit">
            Send Message
          </button>
          <button type="reset" onClick={handleReset} className="btn btn-secondary btn-reset">
            Clear Form
          </button>
        </div>
      </form>

      {/* Form Data Display (for debugging) */}
      <div className="form-data-display">
        <h3>Form Data (Real-time):</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ContactForm;