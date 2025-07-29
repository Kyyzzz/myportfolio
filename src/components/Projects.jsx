import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform', 
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/assets/images/ecommerce.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      type: 'web',
      featured: false
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/assets/images/taskmanagement.png',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskmanager',
      type: 'web',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'A React Native weather application with location-based forecasts, interactive maps, and beautiful weather animations.',
      image: '/assets/images/weathermobile.png',
      technologies: ['React Native', 'OpenWeather API', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/weather-app',
      type: 'mobile',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      description: 'A comprehensive dashboard for tracking portfolio performance with real-time data visualization and analytics.',
      image: '/assets/images/portfolio.png',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/portfolio-dashboard',
      type: 'web',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, post management, and real-time messaging.',
      image: '/assets/images/socailmedia.png',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/social-api',
      type: 'api',
      featured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A complete LMS with course creation, student enrollment, progress tracking, and interactive quizzes.',
      image: '/assets/images/learningmanagement.png',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/lms',
      type: 'web',
      featured: false
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'api':
        return <Code className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group card overflow-hidden transition-all duration-1000 hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${project.featured ? 'lg:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mr-3">
                      {getIcon(project.type)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center"
            >
              <Github size={20} className="mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 