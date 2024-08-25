import React from 'react';
import { FaCode, FaBuilding } from 'react-icons/fa';
// Experience data
const experiences = [
  {
    company: 'Jumatechs',
    title: 'Backend Developer Intern',
    location: 'Remote',
    duration: 'June 2023 - Present',
    responsibilities: [
      'Developed RESTful APIs using Node.js and Express.js.',
      'Implemented authentication and authorization with JWT.',
      'Optimized database queries for faster response times using PostgreSQL.',
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
  },
  {
    company: 'XYZ Corp',
    title: 'Junior Software Engineer',
    location: 'Dhaka, Bangladesh',
    duration: 'Jan 2022 - May 2023',
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
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-primary text-3xl mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <FaBuilding className="mr-2" />
                    <p>{experience.company} - {experience.location}</p>
                  </div>
                  <p className="text-gray-400 italic">
                    {experience.duration}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <ul className="list-inside list-disc text-gray-300">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-xs font-medium text-gray-300 py-1 px-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
