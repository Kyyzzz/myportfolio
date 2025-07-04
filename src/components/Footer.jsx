import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:languidopaulo@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container-width section-padding pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-4">Portfolio</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full Stack Developer passionate about creating beautiful, functional, 
                and user-centered digital experiences. Let's build something amazing together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>languidopaulo@gmail.com</p>
              <p>+63 921 203 5103</p>
              <p>Cebu, Philippines</p>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-4">
              <a
                href="mailto:languidopaulo@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Paulo. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 