import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="container flex md:flex-row items-center py-8 text-white">
            <div className="hidden md:flex flex-col items-center mt-6 md:mt-0">
                <div className="flex flex-col items-center space-y-4">
                    <Link
                        href="https://github.com/gausalmunirtushar"
                        className="text-white"
                        aria-label="Github Profile"
                    >
                        <FaGithub size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gausalmunirtushar"
                        className="text-white"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={20} />
                    </Link>
                    <Link
                        href="https://medium.com/@gausalmunirtushar"
                        className="text-white"
                        aria-label="Medium Profile"
                    >
                        <FaMedium size={20} />
                    </Link>
                    <Link
                        href="https://twitter.com/gausalmunir"
                        className="text-white"
                        aria-label="Twitter Profile"
                    >
                        <FaTwitter size={20} />
                    </Link>
                </div>
                <div className="mt-2">
                    <div className="w-[3px] h-20 bg-white mt-2 ml-14"></div>
                    <div className="text-sm text-white font-bold uppercase bg-tertiary tracking-wider -rotate-90 py-2 px-3 rounded mt-10">
                        Follow Me
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-xl font-semibold text-primary">
                    Hello! I am
                </h1>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-2">
                    Gaus Al Munir Tushar
                </h2>
                <p className="text-2xl mt-4 font-bold text-primary">
                    Software Engineer
                </p>
                <p className="text-gray-200 text-center">
                    Full Stack Developer{' '}
                    <span className="text-primary text-xl">•</span> JavaScript
                    Stack <span className="text-primary text-xl">•</span> DevOps
                    Practitioner
                </p>
                <div className="flex sm:items-center mt-6 space-x-4">
                    <button className="bg-primary text-white px-6 py-2 rounded">
                        Get Resume
                    </button>
                    <button className="border-2 border-primary text-white px-6 py-2 rounded">
                        About Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
