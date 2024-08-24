"use client"
import React from 'react';
const experiences = [
    {
      role: "Frontend Developer",
      company: "ABC Tech",
      duration: "Jan 2022 - Present",
      description: "Developing and maintaining web applications using React.js and Tailwind CSS. Collaborated with designers and backend developers to create seamless user experiences.",
    },
    {
      role: "Web Developer",
      company: "XYZ Solutions",
      duration: "June 2020 - Dec 2021",
      description: "Built responsive websites and web applications using HTML, CSS, JavaScript, and PHP. Optimized websites for speed and SEO.",
    },
    {
      role: "Intern",
      company: "Startup Inc.",
      duration: "Jan 2020 - May 2020",
      description: "Assisted in the development of the company's main product, a web-based dashboard for data visualization. Gained experience with React.js and RESTful APIs.",
    },
  ];
  
export default function Experience() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-green-400">{experience.company}</p>
                <p className="text-gray-400">{experience.duration}</p>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <p className="text-gray-300">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
