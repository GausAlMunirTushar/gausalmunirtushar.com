"use client";
import { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="container flex items-center justify-between py-6 text-white mx-auto px-8">
            <div>
                <Image src="/favicon.svg" alt="Logo" width={45} height={45} />
            </div>
            <div className="flex items-center gap-5">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5">
                    <Menu />
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white bg-primary py-2 px-3 rounded hover:bg-green-500 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-20 left-0 w-full h-full bg-gray-900 text-white md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center pt-20`}
            >
                <Menu mobile={true} />
                <button 
                    className="mt-6 border-2 border-green-500 text-white uppercase py-1.5 px-4 rounded hover:bg-green-500 transition-colors"
                    onClick={toggleMenu}
                >
                    Resume
                </button>
            </div>
        </header>
    );
};

export default Header;
