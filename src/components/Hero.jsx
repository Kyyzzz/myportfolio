import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Greeting */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">Paulo Languido</span>
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-200 mb-8 animate-slide-up animation-delay-200">
              Junior Software Developer
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-400">
              I create beautiful, responsive, and user-friendly web applications 
              with modern technologies. Passionate about clean code and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-600">
              <button
                onClick={() => scrollToNextSection()}
                className="btn-primary text-lg px-8 py-3"
              >
                View My Work
              </button>
              <a
                href="#contact"
                className="btn-secondary text-lg px-8 py-3 inline-block"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16 animate-fade-in animation-delay-600">
              <a
                href="https://github.com/Kyyzzz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/paulo-languido-4a891436b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:languidopaulo@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToNextSection}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 