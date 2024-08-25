import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-4">
                <div className="md:w-2/3">
                    <p className="text-lg md:text-xl mb-8">
                        {`Hello! I'm Gaus Al Munir Tushar, a passionate Software
                        Engineer. I develop web applications, mobile
                        applications, and desktop applications. My core skill is
                        based on JavaScript and I love to do most of the things
                        using JavaScript. I love to make the web more open to
                        the world. I have graduated with a bachelor's degree in
                        Computer Science Engineering from Northern University. I am available for any kind of
                        job opportunity that suits my interests.`}
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
                <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
                    <Image
                        src="/images/GausAlMunirTushar.png"
                        alt="Gaus Al Munir Tushar's Photo"
                        width={300}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
