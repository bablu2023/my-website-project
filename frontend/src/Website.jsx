import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const pages = {
  home: {
    title: "Personalized Innovation with designsimx",
    subtitle: "Learn from Expert Designers Anytime, Anywhere",
    content: "designsimxinnovation offers cutting-edge virtual and in-person tutoring in design, technology, and more, tailored to your needs.",
    cta: "Explore Our Services",
    image: "https://placehold.co/600x400/005566/ff6f61?text=Innovation",
    stats: [
      { count: "1403", label: "Projects" },
      { count: "327", label: "Clients" },
      { count: "120", label: "Experts" },
    ]
  },
  about: {
    title: "About designsimxinnovation",
    content: "designsimxinnovation is a team of experienced creators with decades of expertise in the design industry. Our team of specialists offers vast experience across various design and technology fields.",
    quotes: [
      "“Design is not just what it looks like and feels like. Design is how it works.” - Steve Jobs",
      "“Simplicity is the ultimate sophistication.” - Leonardo da Vinci",
    ],
    image: "https://placehold.co/600x400/005566/ff6f61?text=About+designsimxinnovation"
  },
  services: {
    title: "Our Services",
    content: "We offer a comprehensive suite of services to meet all your digital needs.",
    items: [
      { title: "Web Design", desc: "Stunning, user-friendly websites tailored to your brand identity and goals." },
      { title: "Web Development", desc: "Robust and scalable solutions for applications of all sizes." },
      { title: "Digital Marketing", desc: "Strategic campaigns to increase your online visibility and reach your target audience." },
      { title: "E-commerce Solutions", desc: "Secure, scalable, and easy-to-manage online stores that drive sales." },
      { title: "Content Creation", desc: "Engaging content to tell your brand's story and connect with your audience." },
      { title: "SEO Optimization", desc: "Improve your search engine rankings and attract more organic traffic." },
    ]
  },
  contact: {
    title: "Contact Us",
    content: "We would love to hear from you. Send us a message and we'll get back to you as soon as possible.",
  }
};

const Header = ({ onNavClick, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src="https://placehold.co/150x40/005566/ff6f61?text=designsimx" alt="designsimxinnovation Logo" className="h-10 transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={() => onNavClick('home')} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <nav className={`w-full md:w-auto md:block transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen mt-4' : 'max-h-0 md:max-h-full'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center text-lg">
            {Object.keys(pages).map(key => (
              <li key={key} className={`transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0'}`} style={{ transitionDelay: isMenuOpen ? `${(Object.keys(pages).indexOf(key)) * 50}ms` : '0ms' }}>
                <button
                  onClick={() => {
                    onNavClick(key);
                    setIsMenuOpen(false);
                  }}
                  className={`p-2 rounded-lg transition duration-300 font-semibold ${activePage === key ? 'bg-coral-500 text-white shadow-md' : 'text-gray-200 hover:text-white hover:bg-teal-700'}`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gradient-to-r from-teal-900 to-teal-950 text-gray-300 py-10 px-4 md:px-8 mt-auto">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-coral-400 font-bold text-xl mb-4">Services</h4>
        <ul>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Tutoring</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Assessments</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Scoring</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-coral-400 font-bold text-xl mb-4">Quick Links</h4>
        <ul>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-coral-400 font-bold text-xl mb-4">Contact Us</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2"><i className="fas fa-phone-alt"></i><span>+91-11-66509601</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-envelope"></i><span>info@designsimxinnovation.com</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-map-marker-alt"></i><span>F-4, Okhla Industrial Area, Phase-I, New Delhi - 110020, India</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      Copyright © 2025 designsimxinnovation. All Rights Reserved.
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = "designsimxinnovation | " + (currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
  }, [currentPage]);

  const renderPage = () => {
    const pageData = pages[currentPage];
    switch (currentPage) {
      case 'home':
        return (
          <div className="bg-gradient-to-br from-teal-50 to-white min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
              <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-coral-400 mb-4">{pageData.title}</h1>
                  <h2 className="text-xl md:text-3xl font-light mb-6">{pageData.subtitle}</h2>
                  <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0">{pageData.content}</p>
                  <button className="bg-coral-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105">
                    {pageData.cta}
                  </button>
                </div>
                <div className="lg:w-1/2 text-center animate-fade-in-up delay-200">
                  <div className="relative inline-block">
                    <img src={pageData.image} alt="Innovation" className="rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105" />
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-4">
                      {pageData.stats.map((stat, i) => (
                        <div key={i} className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-4 text-center text-white font-bold shadow-lg transform transition-transform duration-500 hover:scale-110">
                          <h4 className="text-2xl text-coral-400">{stat.count}</h4>
                          <span className="text-sm">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto p-4 md:p-8">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="lg:w-1/2 animate-fade-in-up">
                  <img src={pageData.image} alt={pageData.title} className="rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up delay-200">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">{pageData.title}</h1>
                  <div className="w-16 h-1 bg-coral-500 rounded mb-6 mx-auto lg:mx-0"></div>
                  <p className="text-lg text-gray-700 mb-6">{pageData.content}</p>
                  <div className="italic text-gray-500 space-y-4">
                    {pageData.quotes.map((quote, i) => (
                      <p key={i}>"{quote}"</p>
                    ))}
                  </div>
                  <button className="mt-8 bg-coral-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto p-4 md:p-8">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">{pageData.title}</h1>
                <div className="w-16 h-1 bg-coral-500 rounded mb-6 mx-auto"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">{pageData.content}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {pageData.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <h3 className="text-xl font-bold text-teal-700 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto p-4 md:p-8">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">{pageData.title}</h1>
                <div className="w-16 h-1 bg-coral-500 rounded mb-6 mx-auto"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">{pageData.content}</p>
              </div>
              <form className="max-w-xl mx-auto mt-12 space-y-6 animate-fade-in-up delay-200">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-coral-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />
      <Header onNavClick={setCurrentPage} activePage={currentPage} />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}

export default App;
