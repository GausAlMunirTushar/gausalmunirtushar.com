"use client"
import React from 'react';

const Footer = () => {
  const languages = [
    { label: 'বাংলা', key: 'bn' }, // Bengali
    { label: 'THANKS', key: 'en' }, // English
    { label: 'شکریہ', key: 'ur' }, // Urdu
    { label: 'धन्यवाद', key: 'hi' }, // Hindi
    { label: 'धन्यवाद', key: 'mr' }, // Marathi
  ];

  return (
    <footer className="bg-tertiary text-white py-8 px-6 flex items-center justify-between">
      <div className="flex space-x-3">
        {languages.map((lang) => (
          <button
            key={lang.key}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg border-b-4 border-green-500 hover:bg-gray-700 focus:outline-none"
          >
            {lang.label}
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <span>⭐ STAR</span>
        <span>🔗 FORK</span>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none">
          BY ME
        </button>
        <button id="#" className="bg-primary text-white py-1 px-2 rounded-lg focus:outline-none">
          ▲
        </button>
      </div>
    </footer>
  );
};

export default Footer;
