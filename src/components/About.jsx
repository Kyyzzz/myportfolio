import React, { useEffect, useState, useRef } from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & Others',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container-width section-padding">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div className="space-y-6">
              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Hello! I'm a passionate developer.
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm an aspiring junior software developer with a strong passion for building 
                    digital solutions that solve real-world problems. I enjoy turning complex 
                    ideas into clean, user-friendly designs and am eager to apply my skills 
                    in a professional environment for the first time.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or enjoying a good cup of coffee 
                    while reading about the latest trends in web development.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating 
                    user experiences that are both functional and delightful.
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div
                className={`grid grid-cols-2 gap-6 pt-8 transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">0+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">0+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div> */}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className={`card p-6 transition-all duration-1000 hover:scale-105 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 