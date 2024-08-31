'use client';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import SocialLinks from './contact/SocialLinks';
import ContactDetails from './contact/ContactDetails';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post(
                `http://18.141.25.55/api/v1/messages`,
                formData
            );
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            setFormData({ name: '', email: '', message: '' });

            // Remove success message after 5 seconds
            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            setErrorMessage('Failed to send message. Please try again later.');
            setTimeout(() => setErrorMessage(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="text-white py-10 sm:py-20">
            <div className="container mx-auto flex flex-col gap-6 md:flex-row justify-between items-start px-4 md:px-6">
                <section className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text-lg mb-6">
                        {`I'm a software engineer specializing in full-stack development. 
            If you're looking to collaborate, please feel free to reach out!`}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full py-2 px-3 rounded bg-tertiary focus:outline-none focus:ring-1 focus:ring-green-500"
                            required
                            aria-label="Your Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full py-2 px-3 rounded bg-tertiary focus:outline-none focus:ring-1 focus:ring-green-500"
                            required
                            aria-label="Your Email"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="w-full h-24 py-2 px-3 rounded bg-tertiary focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                            required
                            aria-label="Your Message"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            aria-live="polite"
                        >
                            {isSubmitting ? 'Sending...' : 'Message Me'}
                        </button>
                        {successMessage && (
                            <p className="text-green-500 mt-2" role="alert">
                                {successMessage}
                            </p>
                        )}
                        {errorMessage && (
                            <p className="text-red-500 mt-2" role="alert">
                                {errorMessage}
                            </p>
                        )}
                    </form>
                </section>

                <aside className="md:w-1/2 space-y-4 md:ml-3">
                    <SocialLinks />
                    <ContactDetails />
                </aside>
            </div>
        </div>
    );
}
