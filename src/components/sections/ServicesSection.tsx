import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiceCard = ({ image, title, description }: { image: string, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-dental-dark mb-3">{title}</h3>
        <p className="text-dental-dark mb-4">{description}</p>
        <Link href="/services" className="text-dental-primary hover:opacity-80 transition-colors font-medium">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      image: "/Images/available 24:7.avif",
      title: "Available 24/7",
      description: "Rapid response plumbing services for burst pipes, leaks, clogs, and other urgent issues."
    },
    {
      image: "/Images/drain-cleaning.avif",
      title: "Drain Cleaning",
      description: "Professional drain cleaning and maintenance using advanced equipment and techniques."
    },
    {
      image: "/Images/water heaters.avif",
      title: "Water Heaters",
      description: "Installation and repair of traditional and tankless water heaters for reliable hot water."
    },
    {
      image: "/Images/pipe services.avif",
      title: "Pipe Services",
      description: "Expert pipe installation, repair, and replacement for all types of plumbing systems."
    },
    {
      image: "/Images/restaurant plumbing system.avif",
      title: "Commercial Plumbing",
      description: "Comprehensive plumbing solutions for businesses, with minimal disruption to operations."
    }
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container-dental">
        <div className="text-center mb-12">
          <div className="text-dental-primary text-sm uppercase font-medium tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-dental-dark text-3xl md:text-4xl mb-4 font-heading">Professional Plumbing Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-dark">
            From urgent repairs to complete bathroom renovations, our licensed plumbers provide comprehensive solutions for all your plumbing needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="bg-dental-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-colors inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
