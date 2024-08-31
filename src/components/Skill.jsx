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
    FaGithubAlt,
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
    SiApachekafka,
    SiNginx,
    SiAnsible,
    SiJenkins,
    SiPrometheus,
    SiTerraform,
    SiGrafana,
    SiPython,
    SiSqlite,
    SiExpress,
    SiNestjs,
    SiVuedotjs,
    SiNuxtdotjs,
    SiMongoose,
    SiPrisma,
    SiSequelize,
} from 'react-icons/si';

const Skill = () => {
    // Define the categories with icons
    const categories = {
        Web: [
            // {
            //     name: 'HTML',
            //     percentage: 95,
            //     icon: <FaHtml5 className="text-orange-500" />,
            // },
            // {
            //     name: 'CSS',
            //     percentage: 90,
            //     icon: <FaCss3Alt className="text-blue-500" />,
            // },
            // {
            //     name: 'SCSS',
            //     percentage: 85,
            //     icon: <FaSass className="text-pink-500" />,
            // },
            // {
            //     name: 'Tailwind CSS',
            //     percentage: 80,
            //     icon: <SiTailwindcss className="text-teal-500" />,
            // },
            // {
            //     name: 'Bootstrap',
            //     percentage: 85,
            //     icon: <FaBootstrap className="text-purple-600" />,
            // },
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
            {
                name: 'Express.js',
                percentage: 85,
                icon: <SiExpress className="text-gray-400" />,
            },
            {
                name: 'NestJS',
                percentage: 80,
                icon: <SiNestjs className="text-red-500" />,
            },
            {
                name: 'Mongoose',
                percentage: 85,
                icon: <SiMongoose className="text-red-500" />,
            },
            {
                name: 'Prisma',
                percentage: 80,
                icon: <SiPrisma className="text-blue-500" />,
            },
            {
                name: 'Sequelize',
                percentage: 75,
                icon: <SiSequelize className="text-purple-500" />,
            },
            // {
            //     name: 'Vue.js',
            //     percentage: 80,
            //     icon: <SiVuedotjs className="text-green-400" />,
            // },
            // {
            //     name: 'Nuxt.js',
            //     percentage: 75,
            //     icon: <SiNuxtdotjs className="text-green-500" />,
            // },
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
            {
                name: 'Python',
                percentage: 80,
                icon: <SiPython className="text-yellow-500" />,
            },
            {
                name: 'SQL',
                percentage: 75,
                icon: <SiSqlite className="text-blue-700" />,
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
        Tools: [
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
            {
                name: 'Nginx',
                percentage: 75,
                icon: <SiNginx className="text-green-500" />,
            },
            {
                name: 'Ansible',
                percentage: 70,
                icon: <SiAnsible className="text-red-500" />,
            },
            {
                name: 'Terraform',
                percentage: 65,
                icon: <SiTerraform className="text-purple-500" />,
            },
            {
                name: 'Jenkins',
                percentage: 70,
                icon: <SiJenkins className="text-blue-600" />,
            },
            {
                name: 'Prometheus',
                percentage: 60,
                icon: <SiPrometheus className="text-orange-600" />,
            },
            {
                name: 'Grafana',
                percentage: 65,
                icon: <SiGrafana className="text-orange-500" />,
            },
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState('Web');

    return (
        <>
            {/* Category Navigation */}
            <div className="container px-4 py-10 sm:py-16 text-white">
                <h2 className="text-3xl font-semibold mb-8">Skills</h2>
                <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`py-2 px-3 sm:px-4 rounded text-md sm:text-lg ${
                                selectedCategory === category
                                    ? 'bg-primary text-white '
                                    : 'border-2 border-primary text-white hover:bg-tertiary'
                            }`}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
                    {categories[selectedCategory].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-tertiary px-3 sm:px-4 py-4 rounded-lg flex items-center space-x-4"
                            role="listitem"
                        >
                            <div className="text-2xl sm:text-4xl">
                                {skill.icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm sm:text-md md:text-lg md:font-semibold">
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skill;
