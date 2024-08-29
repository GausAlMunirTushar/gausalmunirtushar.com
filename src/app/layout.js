import { Lato } from 'next/font/google';
import './globals.css';

const inter = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
    title: 'Gaus Al Munir Tushar | Software Engineer | Web Developer',
    description: `Hello! I'm Gaus Al Munir Tushar, a passionate Software
                        Engineer. I develop web applications, mobile
                        applications, and desktop applications. My core skill is
                        based on JavaScript and I love to do most of the things
                        using JavaScript. I love to make the web more open to
                        the world. I have graduated with a bachelor's degree in
                        Computer Science Engineering from Northern University. I am available for any kind of
                        job opportunity that suits my interests.`,
    keywords: "Gaus Al Munir Tushar, Software Engineer, Web Developer, গাউস আল মুনির তুষার, DevOps Practitoiner",
    author: "Gaus Al Munir Tushar",
    robots: "index, follow",
    openGraph: {
        title: "Gaus Al Munir Tushar | Software Engineer | Web Developer",
        description: `Hello! I'm Gaus Al Munir Tushar, a passionate Software
                        Engineer. I develop web applications, mobile`
        
    },
    
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth bg-secondary">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
