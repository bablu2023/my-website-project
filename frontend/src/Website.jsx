import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// The 'pages' object is re-themed for a workshop.
const pages = {
  home: {
    title: "Mastering Design: A Full-Day Workshop",
    subtitle: "Unlock Your Creative Potential with Hands-On Sessions",
    content: "Join us for an immersive one-day workshop designed to elevate your design skills. Our expert-led sessions cover everything from foundational principles to advanced techniques, perfect for designers of all levels.",
    cta: "Register Now",
    image: "https://placehold.co/600x400/005566/ff6f61?text=Design+Workshop",
    stats: [
      { count: "10+", label: "Expert Speakers" },
      { count: "8", label: "Interactive Sessions" },
      { count: "350+", label: "Attendees" },
    ]
  },
  agenda: {
    title: "Workshop Agenda",
    content: "A detailed breakdown of the day's events, designed to provide a comprehensive learning experience.",
    items: [
      { time: "9:00 AM - 9:30 AM", title: "Registration & Welcome", desc: "Check-in and grab your welcome kit. Kick off the day with a brief introduction." },
      { time: "9:30 AM - 11:00 AM", title: "Keynote: The Future of UI/UX", desc: "A visionary talk on upcoming trends in user interface and experience design." },
      { time: "11:00 AM - 11:15 AM", title: "Coffee Break", desc: "Network with fellow attendees and speakers." },
      { time: "11:15 AM - 1:00 PM", title: "Hands-on: Prototyping in Figma", desc: "Learn to build interactive prototypes with a step-by-step guided session." },
      { time: "1:00 PM - 2:00 PM", title: "Lunch Break", desc: "A catered lunch is provided. Enjoy the food and network!" },
      { time: "2:00 PM - 3:30 PM", title: "Workshop: Building Design Systems", desc: "A practical deep dive into creating scalable and reusable design systems." },
      { time: "3:30 PM - 3:45 PM", title: "Afternoon Break", desc: "Quick break before the final sessions." },
      { time: "3:45 PM - 5:00 PM", title: "Panel Discussion: Design Careers", desc: "Q&A with industry leaders on navigating your professional journey." },
      { time: "5:00 PM - 5:30 PM", title: "Closing Remarks & Networking", desc: "Recap the day's highlights and enjoy a final networking opportunity." },
    ]
  },
  speakers: {
    title: "Meet Our Speakers",
    content: "Learn from the best in the industry.",
    quotes: [
      "“Design is intelligence made visible.” - Alina Wheeler",
      "“Good design is honest.” - Dieter Rams",
    ],
    image: "https://placehold.co/600x400/005566/ff6f61?text=Workshop+Speakers"
  },
  contact: {
    title: "Get in Touch",
    content: "Have a question about the workshop? We're here to help.",
  }
};

const Header = ({ onNavClick, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo updated for the workshop theme */}
          <img src="https://placehold.co/150x40/005566/ff6f61?text=Design+Workshop" alt="Workshop Logo" className="h-10 transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={() => onNavClick('home')} />
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
        <h4 className="text-coral-400 font-bold text-xl mb-4">Workshop Info</h4>
        <ul>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Agenda</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Speakers</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Venue</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-coral-400 font-bold text-xl mb-4">Quick Links</h4>
        <ul>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Register</a></li>
          <li><a href="#" className="hover:text-coral-400 transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-coral-400 font-bold text-xl mb-4">Connect with Us</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2"><i className="fas fa-phone-alt"></i><span>+91-11-66509601</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-envelope"></i><span>info@designsimxinnovation.com</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-map-marker-alt"></i><span>F-4, Okhla Industrial Area, Phase-I, New Delhi - 110020, India</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      Copyright © 2025 Design Workshop. All Rights Reserved.
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = "Design Workshop | " + (currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
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
      case 'speakers': // Renamed from 'about'
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
                      <p key={i}>{quote}</p>
                    ))}
                  </div>
                  <button className="mt-8 bg-coral-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105">
                    View Speaker Bios
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'agenda': // Renamed from 'services'
        return (
          <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto p-4 md:p-8">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">{pageData.title}</h1>
                <div className="w-16 h-1 bg-coral-500 rounded mb-6 mx-auto"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">{pageData.content}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {pageData.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <p className="text-sm text-coral-500 font-semibold mb-1">{item.time}</p>
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
