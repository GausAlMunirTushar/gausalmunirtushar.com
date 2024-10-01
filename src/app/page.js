import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Skill from '@/components/Skill';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="skill">
                <Skill />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}
