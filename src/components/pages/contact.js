import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_7tnfkvh', 'template_8bz7e62', formData, 'iBh9rPc-hpEwBjjJg')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });

         emailjs.send('service_7tnfkvh', 'template_sk6vlk3', formData, 'iBh9rPc-hpEwBjjJg')
            .then((response) => {
                console.log('Notificación a Jon enviada', response.status, response.text);
            })
            .catch((err) => {
                console.error('Error enviando a Jon...', err);
            });

        
        setFormData({
            name: '',
            surname: '',
            email: '',
            message: '',
            phoneNumber: ''
        });
    };

    return (
        <div className='contact-wrapper'>
            <div className='contact-title'>LET'S TALK</div>

            <form onSubmit={handleSubmit}>
                <div className='two-col'>
                    <div>
                        <label>
                            1/ Name *
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder='Enter your name'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            2/ Surname *
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                                placeholder='Enter your surname'
                            />
                        </label>
                    </div>
                </div>
                
                <div className='two-col'>
                    <div>
                        <label>
                            3/ Email *
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Enter your email'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            4/ Phone number *
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                placeholder='Enter your phone number'
                            />
                        </label>
                    </div>
                </div>
                
                <div className='one-col'>
                    <label>
                        5/ Message *
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Your message'
                        />
                    </label>
                </div>
                <div className='privacyPolicy'>
                    <label>
                        <input type="checkbox" name="privacyPolicy" required/>
                        I have read and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a>*
                    </label>
                </div>
                <div className='btn-container'>
                    <button type="submit">Send Message</button>
                </div>
                
            </form>

        </div>
        
    );
};

export default Contact;
