import React from 'react';
import { FaCode, FaBuilding } from 'react-icons/fa';
// Experience data
const experiences = [
    {
        company: 'Texon Limited',
        title: 'Software Engineer',
        location: 'Dhaka, Bangladesh',
        duration: 'May 2024 - Present',
        responsibilities: [
            'Developed RESTful APIs using Node.js and Express.js.',
            'Implemented authentication and authorization with JWT.',
            'Optimized database queries for faster response times using PostgreSQL.',
        ],
        technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    },
    {
        company: 'e Learning and Earning Ltd',
        title: 'Full Stack Developer',
        location: 'Dhaka, Bangladesh',
        duration: 'August 2023 - July 2024',
        responsibilities: [
            'Led the development of a doctor management system using React and Node.js.',
            'Integrated third-party services for enhanced user experience.',
            'Collaborated with cross-functional teams to define project requirements.',
        ],
        technologies: ['React.js', 'Node.js', 'MongoDB'],
    },
];

export default function Experience() {
    return (
        <section className="bg-gray-900 text-white py-10 sm:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((experience, index) => (
                        <article
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <header className="flex items-center mb-4">
                                <FaCode className="text-primary text-3xl mr-4" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-primary">
                                        {experience.title}
                                    </h3>
                                    <div className="flex items-center text-gray-400">
                                        <FaBuilding className="mr-2" />
                                        <p>
                                            {experience.company} -{' '}
                                            {experience.location}
                                        </p>
                                    </div>
                                    <p className="text-gray-400 italic">
                                        {experience.duration}
                                    </p>
                                </div>
                            </header>
                            <section className="mb-4">
                                <ul className="list-inside list-disc text-gray-300">
                                    {experience.responsibilities.map(
                                        (item, idx) => (
                                            <li key={idx} className="mb-2">
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>
                            <footer className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-700 text-xs font-medium text-gray-300 py-1 px-2 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
