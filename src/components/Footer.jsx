"use client";
import React from 'react';

const Footer = () => {
  const languages = [
    { label: 'ধন্যবাদ', key: 'bn' }, // Bengali
    { label: 'THANKS', key: 'en' }, // English
    { label: 'شکریہ', key: 'ur' }, // Urdu
    { label: 'धन्यवाद', key: 'hi' }, // Hindi
  ];

  return (
    <footer className="bg-tertiary text-white py-8 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-wrap justify-center space-x-3 mb-4 md:mb-0 md:px-4">
        {languages.map((lang) => (
          <button
            key={lang.key}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg border-b-4 border-green-500 hover:bg-gray-700 focus:outline-none"
          >
            {lang.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Gaus Al Munir Tushar. All rights reserved.
        </p>
        <button
          id="scroll-to-top"
          title="Back to top"
          className="bg-primary text-white py-1 px-2 rounded-lg hover:bg-primary-dark focus:outline-none"
        >
          ▲
        </button>
      </div>
    </footer>
  );
};

export default Footer;
