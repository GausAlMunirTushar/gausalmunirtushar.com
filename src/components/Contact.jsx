"use client";
import { useState } from 'react';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaTwitter, FaBlog, FaFacebook, FaInstagram, FaYoutube, FaCalendarAlt } from 'react-icons/fa';
import { SiLeetcode, SiHashnode, SiDevdotto } from 'react-icons/si';
import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://message-me-api.onrender.com/api/message', formData);
            setSuccess(response.data.message);
            setError('');
            setFormData({ name: '', email: '', message: '' }); // Reset form
            // Remove success message after 500ms
            setTimeout(() => {
                setSuccess('');
            }, 500);
        } catch (err) {
            setError('Failed to send message.');
            setSuccess('');

            // Remove error message after 500ms (optional)
            setTimeout(() => {
                setError('');
            }, 500);
        }
    };

    return (
        <div className=" text-white py-20">
            <div className="container mx-auto flex flex-col gap-6 md:flex-row justify-between items-start px-4 md:px-4">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text-lg md:text-lg mb-6">
                        {`I'm a software engineer specializing in full-stack development. 
                        If you're looking to collaborate, please feel free to reach out!`}
                    </p>
                    <form onSubmit={handleSubmit} className="my-2">
                        <input
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full my-1 py-2 px-3 focus:outline-none rounded bg-tertiary"
                            required
                        />
                        <br />
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full my-1 py-2 px-3 focus:outline-none rounded bg-tertiary"
                            required
                        />
                        <br />
                        <textarea
                            placeholder="Write your message..."
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full my-1 h-20 py-2 px-3 focus:outline-none rounded bg-tertiary resize-none"
                            required
                        />
                        <br />
                        <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
                            Message Me
                        </button>
                        {success && <p className="text-green-500 mt-2">{success}</p>}
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </form>
                </div>
                <div className="md:w-1/2 space-y-4 md:ml-3">
                    <div>
                        <h2 className="text-2xl font-semibold">Connect with Me</h2>
                        <div className="flex gap-4 my-2 items-center">
                            {/* Social icons */}
                            <a href="https://github.com/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://www.linkedin.com/in/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://leetcode.com/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <SiLeetcode size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://blog.gausalmunirtushar.xyz" target="_blank" rel="noopener noreferrer">
                                <FaBlog size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://twitter.com/GausAlMunir" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://facebook.com/GausAlMunirTusharProfile" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://youtube.com/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://instagram.com/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://hashnode.com/@GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <SiHashnode size={20} className="text-gray-400 hover:text-white" />
                            </a>
                            <a href="https://dev.to/GausAlMunirTushar" target="_blank" rel="noopener noreferrer">
                                <SiDevdotto size={20} className="text-gray-400 hover:text-white" />
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-semibold">Email</h2>
                        <p className="text-gray-400 text-lg">
                            <Link href="mailto:gausalmunirtushar@gmail.com">gausalmunirtushar@gmail.com</Link>{' '}
                            <span className="text-gray-500">(Best way to reach me)</span>
                        </p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-semibold">Book a Meeting</h2>
                        <p className="text-gray-400 flex items-center my-1">
                            <FaCalendarAlt className="text-white mr-2" />
                            <a href="https://calendly.com/gausalmunirtushar" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-lg">calendly.com/gausalmunirtushar</a>
                        </p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-semibold">Address</h2>
                        <p className="text-gray-400 text-lg">
                            Mirpur, Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
