import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            formErrors.name = 'Name is required.';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email.trim()) {
            formErrors.email = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            formErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="contact-page">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>

            <div className="social-links">
                <h3>Find me on:</h3>
                <a href="https://www.instagram.com/edwardnsalvatierra/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://github.com/edwardns1/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div >
        </div >
    );
}

export default Contact;
