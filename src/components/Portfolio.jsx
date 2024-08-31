'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = {
    'web app': [
        {
            title: 'Daktarbari',
            description:
                'A Collection of free Multicolor CSS, JPG, PNG, SVG Gradients with a Gradienta Editor',
            tags: ['gatsby', 'netlify', 'ga', 'forestry'],
            image: '/images/portfolio/daktarbari-2.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Bloodhub',
            description:
                'A Collection of Bengali Cheatsheets for developers, completely open-source',
            tags: ['gatsby', 'json', 'travis ci'],
            image: '/images/portfolio/bloodhub.png',
            github: '#',
            live: '#',
        },
        {
            title: 'JobHuntly',
            description:
                'Learn Practical use case of JavaScript in your everyday life, entirely in Bengali',
            tags: ['Nodejs', 'Expressjs', 'MongoDB'],
            image: '/images/portfolio/jobhuntly.png',
            github: '#',
            live: '#',
        },
    ],
    frontend: [
        {
            title: 'Edushare',
            description:
                'We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.',
            tags: ['react', 'nextjs', 'tailwindcss'],
            image: '/images/portfolio/edushare-2.png',
            github: 'https://github.com/GausAlMunirTushar/edushare',
            live: 'https://tushar-edushare.netlify.app/',
        },
        {
            title: 'Furniro',
            description:
                'Furniro is a sleek e-commerce site offering a variety of stylish furniture with easy navigation, detailed product pages, and secure checkout. ',
            tags: ['react', 'redux', 'css'],
            image: '/images/portfolio/furniro-2.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Frontend Project 1',
            description: 'Description for frontend project 1.',
            tags: ['react', 'redux', 'css'],
            image: '/images/portfolio/trustco.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Personal Portfolio',
            description: 'Personal Portfolio Landing Page.',
            tags: ['react', 'redux', 'tailwidcss'],
            image: '/images/portfolio/portfolio-landing-page-2.png',
            github: 'https://github.com/GausAlMunirTushar/portfolio-landing-page',
            live: 'https://tusharportfolio-landing-page.netlify.app/',
        },
        {
            title: 'Healthyme',
            description: 'Personal Portfolio Landing Page.',
            tags: ['react', 'redux', 'tailwidcss'],
            image: '/images/portfolio/healthyme.png',
            github: 'https://github.com/GausAlMunirTushar/portfolio-landing-page',
            live: 'https://tusharportfolio-landing-page.netlify.app/',
        },
        {
            title: 'Nutritionist',
            description: 'nutritionist -  e commerce website.',
            tags: ['react', 'redux', 'tailwidcss'],
            image: '/images/portfolio/nutritionist.png',
            github: 'https://github.com/GausAlMunirTushar/portfolio-landing-page',
            live: 'https://tusharportfolio-landing-page.netlify.app/',
        },
    ],
    backend: [
        {
            title: 'Blog Application API',
            description:
                'A Blog Application API backend facilitates secure user authentication, dynamic content management, and seamless CRUD operations with efficient database handling and RESTful architecture..',
            tags: ['node.js', 'express', 'mongodb'],
            image: '/images/portfolio/blog-api.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Messmonitor',
            description: 'Description for backend project 1.',
            tags: ['node.js', 'express', 'mongodb'],
            image: '/images/portfolio/mess-monitor.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Doit Expenses',
            description: 'Description for backend project 1.',
            tags: ['node.js', 'express', 'mongodb'],
            image: '/images/portfolio/doit.png',
            github: '#',
            live: '#',
        },
    ],
    Others: [
        {
            title: 'Other Project 1',
            description: 'Description for other project 1.',
            tags: ['python', 'flask', 'sqlalchemy'],
            image: '/images/portfolio/pebisnis-2.png',
            github: '#',
            live: '#',
        },
        {
            title: 'Plantify',
            description: 'Description for other project 1.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: '/images/portfolio/plantify.png',
            github: '#',
            live: '#',
        },
        // Add more other projects as needed
    ],
};

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('web app');

    return (
        <section className=" text-white py-10 sm:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                    {Object.keys(projects).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            aria-label={`Show ${category} projects`}
                            className={`px-5 py-2 sm:px-4 sm:py-2 rounded capitalize ${
                                activeTab === category
                                    ? 'bg-primary text-white'
                                    : 'border-2 border-primary text-white hover:bg-tertiary'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects[activeTab].map((project, index) => (
                        <div
                            key={index}
                            className="bg-tertiary rounded-lg overflow-hidden shadow-lg"
                        >
                            {project.image && (
                                <div className="project-image">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full object-cover"
                                        width={500}
                                        height={300}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700 text-xs font-medium text-gray-300 py-1 px-2 rounded-full mr-2 mb-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-end justify-between">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        aria-label={`View ${project.title} on GitHub`}
                                        className="flex items-center text-green-400"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="mr-2" />
                                        GitHub
                                    </Link>
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        aria-label={`View live demo of ${project.title}`}
                                        className="flex items-center text-green-400"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLink className="mr-2" />
                                        Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
