import Image from 'next/image';
import Link from 'next/link'

export default function About() {
    return (
        <section className=" text-white flex flex-col justify-center items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-4 py-10 sm:py-20">
                <div className="md:w-2/3 ">
                    <p className="text-lg mb-8 leading-[35px]">
                        {`Hello! I’m Gaus Al Munir Tushar, a Software Engineer with deep expertise in the JavaScript stack and a strong focus on DevOps practices. I specialize in building scalable, high-performance web applications and optimizing development processes for maximum efficiency. With a degree in Computer Science Engineering from Northern University Bangladesh, I bring both technical skill and a passion for continuous improvement to every project. I’m eager to leverage my abilities to drive innovation and contribute to impactful solutions.`}
                    </p>
                    <div className="flex mt-6 justify-center sm:justify-start space-x-4">
                        <Link
                            href="#experience"
                            className="bg-primary text-white px-6 py-2 rounded"
                            aria-label="Experience"
                        >
                            Experience
                        </Link>
                        <Link
                            href="#skill"
                            className="border-2 border-primary text-white px-6 py-2 rounded"
                            aria-label="Learn more my skills"
                        >
                            My Skills
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
                    <Image
                        src="/images/GausAlMunirTushar.png"
                        alt="Gaus Al Munir Tushar's Photo"
                        width={300}
                        height={400}
                        className="rounded-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
