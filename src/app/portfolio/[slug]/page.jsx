// app/portfolio/[slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';

// Simulated project data (you would likely fetch this data from a CMS or database)
const projects = {
  'web-app': [
    {
      slug: 'gradienta',
      title: 'Gradienta',
      description:
        'A Collection of free Multicolor CSS, JPG, PNG, SVG Gradients with a Gradienta Editor',
      tags: ['gatsby', 'netlify', 'ga', 'forestry'],
      image: '/images/gradienta.jpg',
      github: '#',
      live: '#',
      details:
        'Gradienta is a tool that helps designers and developers find, create, and download color gradients. The project was built with Gatsby and uses Netlify for continuous deployment...',
      challenges: 'One challenge was handling gradient data in various formats...',
      approach: 'I designed an intuitive UI using React and styled it with Tailwind CSS...',
      technologies: ['Gatsby', 'Netlify', 'Forestry CMS'],
    },
    // Other projects...
  ],
  // Other categories...
};

// Function to find the project by slug
const findProjectBySlug = (slug) => {
  return Object.values(projects)
    .flat()
    .find((project) => project.slug === slug);
};

// The page component
export default function ProjectDetails({ params }) {
  const project = findProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Handle 404 if the project is not found
  }

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <a href="/portfolio" className="text-green-400 mb-4 block">
          &larr; Back to Portfolio
        </a>
        <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg"
                width={500}
                height={300}
              />
            )}
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
            <p className="mb-4">{project.description}</p>
            <p className="text-gray-400 mb-4">{project.details}</p>
            <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
            <p className="text-gray-400 mb-4">{project.challenges}</p>
            <h3 className="text-xl font-semibold mb-2">My Approach</h3>
            <p className="text-gray-400 mb-4">{project.approach}</p>
            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <ul className="list-disc pl-6 mb-6">
              {project.technologies.map((tech, index) => (
                <li key={index} className="text-gray-400">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href={project.github}
                className="flex items-center text-green-400"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              <a href={project.live} className="flex items-center text-green-400">
                <FaLink className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
