import { useState } from 'react';
import './contact.css'; // Import the Contact component styles
import Header from '../components/Header'; // Import the shared Header component

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false); // Track form submission state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({ ...errors, [name]: false }); // Reset error when user starts typing
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message
    };

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors); // Set error states
    } else {
      setSubmitted(true); // Set submitted state to true
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="contact-page">
      <Header /> {/* Use the common header */}
      
      <div className="contact-box">
        <h1>Contact Me</h1>

        {submitted ? (
          <p className="success-message">Thank you! Your message has been submitted.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error-message">Name is required.</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">Email is required.</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="error-message">Message is required.</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
