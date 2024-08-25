'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = {
    'web app': [
        {
            title: 'Gradienta',
            description:
                'A Collection of free Multicolor CSS, JPG, PNG, SVG Gradients with a Gradienta Editor',
            tags: ['gatsby', 'netlify', 'ga', 'forestry'],
            image: '/images/gradienta.jpg',
            github: '#',
            live: '#',
        },
        {
            title: 'DevSonket',
            description:
                'A Collection of Bengali Cheatsheets for developers, completely open-source',
            tags: ['gatsby', 'json', 'travis ci'],
            image: '/images/js.png',
            github: '#',
            live: '#',
        },
        {
            title: 'js.zonayed.me',
            description:
                'Learn Practical use case of JavaScript in your everyday life, entirely in Bengali',
            tags: ['gatsby', 'utterances', 'travis ci'],
            image: '/images/js.png',
            github: '#',
            live: '#',
        },
    ],
    frontend: [
        {
            title: 'Frontend Project 1',
            description: 'Description for frontend project 1.',
            tags: ['react', 'redux', 'css'],
            github: '#',
            live: '#',
        },
        // Add more frontend projects as needed
    ],
    backend: [
        {
            title: 'Backend Project 1',
            description: 'Description for backend project 1.',
            tags: ['node.js', 'express', 'mongodb'],
            image: '/images/backend.jpg',
            github: '#',
            live: '#',
        },
        // Add more backend projects as needed
    ],
    other: [
        {
            title: 'Other Project 1',
            description: 'Description for other project 1.',
            tags: ['python', 'flask', 'sqlalchemy'],
            image: '/images/devops.webp',
            github: '#',
            live: '#',
        },
        // Add more other projects as needed
    ],
};

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('web app');

    return (
        <section className=" text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
                <div className="flex space-x-4 mb-8">
                    {Object.keys(projects).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded capitalize ${
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
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    width={500}
                                    height={300}
                                />
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
                                <div className="flex items-center justify-between">
                                    <a
                                        href={project.github}
                                        className="flex items-center text-green-400"
                                    >
                                        <FaGithub className="mr-2" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center text-green-400"
                                    >
                                        <FaLink className="mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
