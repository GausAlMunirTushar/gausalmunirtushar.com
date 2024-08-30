"use client"

const Footer = () => {
  const languages = [
    { label: 'ধন্যবাদ', key: 'bn' }, 
    { label: 'THANKS', key: 'en' },
    { label: 'شکریہ', key: 'ur' },
    { label: 'धन्यवाद', key: 'hi' }, 
  ];

  return (
    <footer className="bg-tertiary text-white ">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-wrap justify-center space-x-3 mb-4 md:mb-0 md:px-4">
        {languages.map((lang) => (
          <button
            key={lang.key}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg border-b-4 border-green-500 hover:bg-gray-700 focus:outline-none"
            aria-label={`Change language to ${lang.label}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Gaus Al Munir Tushar. All Rights Reserved.
        </p>
        <button
          id="scroll-to-top"
          title="Back to top"
          className="bg-primary text-white py-1 px-2 rounded-lg hover:bg-primary-dark focus:outline-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ▲
        </button>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
