import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Simple icons from Lucide React
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M22 10h-2"/><path d="M2 10h2"/></svg>
);
const RssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const navItems = [
  { name: 'Home', path: 'home', icon: <HomeIcon /> },
  { name: 'About', path: 'about', icon: <InfoIcon /> },
  { name: 'Services', path: 'services', icon: <BriefcaseIcon /> },
  { name: 'Blog', path: 'blog', icon: <RssIcon /> },
  { name: 'Contact', path: 'contact', icon: <MailIcon /> },
];

const Page = ({ children }) => (
  <div className="bg-white rounded-lg p-6 md:p-12 shadow-xl mx-auto max-w-7xl mt-8 mb-12">
    {children}
  </div>
);

const HomePage = () => (
  <Page>
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">Welcome to Our Website!</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        We are a creative digital agency specializing in web design, development, and marketing. Let us help you bring your ideas to life.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Get Started
        </button>
        <button className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  </Page>
);

const AboutPage = () => (
  <Page>
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About Our Company</h1>
      <p className="text-lg text-gray-600 mb-8">
        Founded in 2020, our mission is to deliver exceptional digital solutions that help businesses grow. Our team of passionate experts is dedicated to innovation and client success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To empower businesses with cutting-edge technology and creative designs, driving growth and engagement.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be a global leader in digital innovation, recognized for our quality and client-first approach.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Team</h2>
          <p className="text-gray-600">
            A diverse and talented group of designers, developers, and strategists working together to create amazing things.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

const ServicesPage = () => (
  <Page>
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Services</h1>
      <p className="text-lg text-gray-600 mb-8">
        We offer a comprehensive suite of services to meet all your digital needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Web Design</h3>
          <p className="text-gray-600">
            Stunning, user-friendly websites tailored to your brand identity and goals.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
          <p className="text-gray-600">
            Robust and scalable solutions for applications of all sizes, from simple sites to complex platforms.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
          <p className="text-gray-600">
            Strategic campaigns to increase your online visibility and reach your target audience.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">E-commerce Solutions</h3>
          <p className="text-gray-600">
            Secure, scalable, and easy-to-manage online stores that drive sales.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Content Creation</h3>
          <p className="text-gray-600">
            Engaging content to tell your brand's story and connect with your audience.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">SEO Optimization</h3>
          <p className="text-gray-600">
            Improve your search engine rankings and attract more organic traffic.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

const BlogPage = () => (
  <Page>
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Stay up-to-date with our latest insights, articles, and news.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">The Future of Web Development</h3>
          <p className="text-sm text-gray-500 mb-4">October 26, 2025</p>
          <p className="text-gray-600">
            Exploring the latest trends and technologies shaping the web development landscape.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">5 Tips for a Great User Experience</h3>
          <p className="text-sm text-gray-500 mb-4">October 20, 2025</p>
          <p className="text-gray-600">
            A guide to designing intuitive and enjoyable user interfaces for your website.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Why Your Business Needs a Website</h3>
          <p className="text-sm text-gray-500 mb-4">October 15, 2025</p>
          <p className="text-gray-600">
            Understanding the importance of a strong online presence for modern businesses.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

const ContactPage = () => (
  <Page>
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        We would love to hear from you. Send us a message and we'll get back to you as soon as possible.
      </p>
      <form className="max-w-xl mx-auto space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </Page>
);

const getPage = (path) => {
  switch (path) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'services':
      return <ServicesPage />;
    case 'blog':
      return <BlogPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
};

const Header = ({ currentPage, onNavClick }) => (
  <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
      <div className="text-3xl font-extrabold text-white mb-4 md:mb-0">
        My Website
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => onNavClick(item.path)}
                className={`flex items-center space-x-2 p-2 rounded-lg transition duration-300 hover:bg-gray-700
                  ${currentPage === item.path ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-6 px-4 md:px-8 mt-auto">
    <div className="container mx-auto text-center text-sm md:text-base">
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans antialiased">
      <Header currentPage={currentPage} onNavClick={setCurrentPage} />

      <main className="flex-grow container mx-auto px-4 md:px-8">
        {getPage(currentPage)}
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
