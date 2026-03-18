import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OfficeTourSection = () => {
  const projects = [
    {
      image: "/Images/restaurant plumbing system.avif",
      title: "Restaurant Plumbing System",
      description: "Commercial kitchen plumbing installation with grease traps",
      category: "Commercial"
    },
    {
      image: "/Images/tankless water heater.jpg",
      title: "Tankless Water Heater",
      description: "Energy-efficient water heater upgrade for large family home",
      category: "Residential"
    },
    {
      image: "/Images/basement protection.jpeg",
      title: "Basement Protection",
      description: "Sump pump installation and waterproofing solution",
      category: "Residential"
    }
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container-dental">
        <div className="text-center mb-12">
          <div className="text-dental-primary text-sm uppercase font-medium tracking-wider mb-3">
            Our Projects
          </div>
          <h2 className="text-dental-dark text-3xl md:text-4xl mb-4 font-heading">Recent Projects</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-dark">
            Take a look at some of our recent plumbing installations and renovations. We take pride in delivering quality workmanship for every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-dental-primary text-white py-1 px-3 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading text-dental-dark mb-2">{project.title}</h3>
                <p className="text-dental-dark mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/services" 
                    className="text-dental-primary hover:opacity-80 transition-colors font-medium flex items-center gap-1"
                  >
                    View Details
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-md">
            <div className="text-dental-dark px-6 md:border-r border-gray-200">
              <span className="block text-3xl font-bold mb-1 text-dental-primary">100+</span>
              <span className="text-sm">Projects Completed</span>
            </div>
            <div className="text-dental-dark px-6 md:border-r border-gray-200">
              <span className="block text-3xl font-bold mb-1 text-dental-primary">98%</span>
              <span className="text-sm">Customer Satisfaction</span>
            </div>
            <div className="text-dental-dark px-6">
              <span className="block text-3xl font-bold mb-1 text-dental-primary">15+</span>
              <span className="text-sm">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeTourSection;
