'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    checkbox: false,
  });
  const [status, setStatus] = useState({ msg: '', color: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      setStatus({ msg: 'Please fill out all fields.', color: 'red' });
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ msg: 'Your message has been sent!', color: 'green' });
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', checkbox: false });
      } else {
        setStatus({ msg: 'Something went wrong. Please try again.', color: 'red' });
      }
    } catch {
      setStatus({ msg: 'Something went wrong. Please try again.', color: 'red' });
    }
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact me">
      <div className={styles.contactOverlay} />
      <h3 className="center">
        Contact <span>Me</span>
      </h3>

      <div className={styles.contactContainer}>
        {/* Contact info */}
        <div className={styles.contactText}>
          <h4>Scott Sutherland</h4>
          <p className={styles.contactSubtitle}>I am currently available for freelance work.</p>
          <a href="mailto:scott@webcheddar.ca">
            <i className="fa fa-envelope" />
            scott@webcheddar.ca
          </a>
          <br />
          <span>
            <i className="fa fa-map-marker-alt" /> Toronto, Ontario
          </span>
          <div className={styles.contactSocialIcons}>
            <a aria-label="My Github link" href="https://github.com/Spielbergo">
              <i className="fab fa-github" />
            </a>
            <a
              aria-label="My Linkedin link"
              href="https://www.linkedin.com/in/scott-sutherland-7745045a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className={styles.contactForm}>
          <form id="form" onSubmit={handleSubmit} noValidate aria-describedby="formStatus">
            <div className={styles.halfWidthInput}>
              <label htmlFor="firstName" className="sr-only">First Name (required)</label>
              <input
                aria-label="First Name"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                aria-required="true"
                minLength={3}
                maxLength={100}
              />
              <label htmlFor="lastName" className="sr-only">Last Name (required)</label>
              <input
                aria-label="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                aria-required="true"
                minLength={3}
                maxLength={100}
              />
            </div>
            <div className={styles.fullWidthInput}>
              <label htmlFor="email" className="sr-only">Email Address (required)</label>
              <input
                aria-label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              aria-label="Phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="555-555-5555"
              value={form.phone}
              onChange={handleChange}
            />
            <div className={styles.fullWidthInput}>
              <label htmlFor="messageBox" className="sr-only">Message</label>
              <textarea
                aria-label="Message"
                id="messageBox"
                name="message"
                placeholder="Please type your message..."
                cols={30}
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <div className={styles.submitBtn}>
              <button type="submit" aria-label="Submit contact form">
                Submit
              </button>
            </div>
            <label className={styles.formCheckbox}>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={form.checkbox}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <span>I am not a robot (required)</span>
            </label>
          </form>
          <div
            id="formStatus"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {status.msg && (
              <p
                className={styles.message}
                style={{ color: status.color }}
                role={status.color === 'red' ? 'alert' : undefined}
              >
                {status.msg}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
