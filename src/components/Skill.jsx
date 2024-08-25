'use client';
import { useState } from 'react';
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaGitAlt,
    FaDocker,
    FaGithubAlt
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiRedux,
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiRedis,
    SiLinux,
    SiKubernetes,
} from 'react-icons/si';

const Skill = () => {
    // Define the categories with icons
    const categories = {
        Web: [
            {
                name: 'HTML',
                percentage: 95,
                icon: <FaHtml5 className="text-orange-500" />,
            },
            {
                name: 'CSS',
                percentage: 90,
                icon: <FaCss3Alt className="text-blue-500" />,
            },
            {
                name: 'SCSS',
                percentage: 85,
                icon: <FaSass className="text-pink-500" />,
            },
            {
                name: 'Tailwind CSS',
                percentage: 80,
                icon: <SiTailwindcss className="text-teal-500" />,
            },
            {
                name: 'Bootstrap',
                percentage: 85,
                icon: <FaBootstrap className="text-purple-600" />,
            },
            {
                name: 'React',
                percentage: 90,
                icon: <FaReact className="text-blue-500" />,
            },
            {
                name: 'Redux',
                percentage: 75,
                icon: <SiRedux className="text-purple-500" />,
            },
            {
                name: 'Next.JS',
                percentage: 75,
                icon: <SiNextdotjs className="text-black" />,
            },
            {
                name: 'Node JS',
                percentage: 80,
                icon: <FaNodeJs className="text-green-500" />,
            },
        ],
        Programming: [
            {
                name: 'JavaScript',
                percentage: 90,
                icon: <SiJavascript className="text-yellow-500" />,
            },
            {
                name: 'TypeScript',
                percentage: 85,
                icon: <SiTypescript className="text-blue-500" />,
            },
        ],
        Databases: [
            {
                name: 'MongoDB',
                percentage: 90,
                icon: <SiMongodb className="text-green-500" />,
            },
            {
                name: 'MySQL',
                percentage: 85,
                icon: <SiMysql className="text-blue-500" />,
            },
            {
                name: 'PostgreSQL',
                percentage: 80,
                icon: <SiPostgresql className="text-blue-700" />,
            },
            {
                name: 'Redis',
                percentage: 75,
                icon: <SiRedis className="text-red-500" />,
            },
        ],
        'Tools': [
            {
                name: 'Git',
                percentage: 95,
                icon: <FaGitAlt className="text-orange-500" />,
            },
            {
                name: 'Docker',
                percentage: 80,
                icon: <FaDocker className="text-blue-500" />,
            },
            {
                name: 'Linux',
                percentage: 85,
                icon: <SiLinux className="text-yellow-500" />,
            },
            {
                name: 'Kubernetes',
                percentage: 70,
                icon: <SiKubernetes className="text-blue-500" />,
            },
            {
                name: 'GitHub Actions',
                percentage: 75,
                icon: <FaGithubAlt className="text-black" />,
            },
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState('Web');

    return (
        <div className=" text-white p-6">
            {/* Category Navigation */}
            <div className="flex space-x-4 mb-4 md:px-4">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`py-2 px-4 rounded ${
                            selectedCategory === category
                                ? 'bg-primary text-white '
                                : 'border-2 border-primary text-white hover:bg-tertiary'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-4">
                {categories[selectedCategory].map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
                    >
                        <div className="text-4xl">{skill.icon}</div>
                        <div className="flex-1">
                            <div className="text-lg font-semibold">
                                {skill.name}
                            </div>
                            {/* Skill progress bar */}
                            {/* <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div> */}
                        </div>
                        {/* <div className="text-green-500 font-bold">{skill.percentage}%</div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
