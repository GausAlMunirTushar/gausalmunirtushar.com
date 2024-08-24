"use client"
import React from 'react';

const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and data structures. Completed projects in web development, machine learning, and database management.",
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2021",
      description: "Intensive bootcamp covering frontend and backend development, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
    },
    {
      degree: "High School Diploma",
      institution: "Tech High School",
      duration: "2012 - 2016",
      description: "Specialized in science and mathematics, with extracurricular activities in robotics and coding clubs.",
    },
  ];
  
export default function Education() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-green-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.duration}</p>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
