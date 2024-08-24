import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="flex md:flex-row items-center py-8 text-white">
            <div className="flex flex-col items-center mt-6 md:mt-0">
                <div className="flex flex-col items-center space-y-4">
                    <Link href="https://github.com/gausalmunirtushar" className="text-white">
                        <FaGithub size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gausalmunirtushar" className="text-white">
                        <FaLinkedin size={20} />
                    </Link>
                    <Link href="https://medium.com/@gausalmunirtushar" className="text-white">
                        <FaMedium size={20} />
                    </Link>
                    <Link href="https://twitter.com/gausalmunir" className="text-white">
                        <FaTwitter size={20} />
                    </Link>
                </div>
                <div className="mt-2">
                    <div className="w-1 h-16 bg-white mt-2 ml-12"></div>
                    <div className="text-sm text-white uppercase bg-slate-700 tracking-wider -rotate-90 py-1 px-2 rounded mt-10">
                        Follow Me
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold text-primary">Hello! I am</h1>
                <h2 className="text-7xl font-extrabold mt-2">
                    Gaus Al Munir Tushar
                </h2>
                <p className="text-2xl mt-4 font-bold text-primary">
                    Software Engineer
                </p>
                <p className="mt-2 text-gray-200">
                    Web Developer <span className="text-primary text-2xl">•</span> Full Stack Developer <span className="text-primary text-2xl">•</span> DevOps Practitioner
                </p>
                <div className="flex mt-6 space-x-4">
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
