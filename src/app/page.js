import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Experience/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}
