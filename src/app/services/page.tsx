import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

// Service Card Component
const ServiceCard = ({
  title,
  description,
  imageSrc,
  link,
  tag = null
}: {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  tag?: { text: string; highlight?: boolean } | null;
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        {tag && (
          <div className={`absolute top-4 right-4 py-2 px-4 rounded-full text-white ${tag.highlight ? 'bg-dental-gold' : 'bg-dental-primary'}`}>
            {tag.text}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading text-dental-dark mb-3">{title}</h3>
        <p className="text-dental-dark mb-6">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={link} className="text-dental-primary hover:text-dental-blue transition-colors font-medium">
            Learn More
          </Link>
          <Link href="/book" className="bg-dental-primary text-white hover:bg-dental-blue transition-colors px-4 py-1 rounded-full">
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
};

// Page Header Component
const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-dental-primary text-white py-12 mb-12">
      <div className="container-dental">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">{title}</h1>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Emergency Plumbing",
      description: "Available 24/7 for all your plumbing emergencies. From burst pipes to severe leaks, our expert plumbers will respond quickly to prevent water damage and restore your plumbing system to proper working order.",
      imageSrc: "/Images/available 24:7.avif",
      link: "/emergency-plumbing",
      tag: { text: "24/7", highlight: true }
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning services using advanced equipment to clear any blockage. We handle everything from simple clogs to complex sewer line issues, ensuring your drains flow smoothly.",
      imageSrc: "/Images/drain-cleaning.avif",
      link: "/drain-cleaning",
      tag: null
    },
    {
      title: "Water Heater Services",
      description: "Expert installation, repair, and maintenance of all types of water heaters. Whether you need a traditional tank or modern tankless system, we ensure reliable hot water for your home or business.",
      imageSrc: "/Images/water heaters.avif",
      link: "/water-heater",
      tag: { text: "PROFESSIONAL", highlight: false }
    },
    {
      title: "Pipe Installation & Repair",
      description: "Professional pipe installation and repair services using high-quality materials. We handle copper, PEX, and other piping systems, ensuring leak-free and efficient water distribution in your property.",
      imageSrc: "/Images/pipe services.avif",
      link: "/pipe-services",
      tag: null
    },
    {
      title: "Sump Pump Services",
      description: "Keep your basement dry with our expert sump pump services. We offer installation, maintenance, and repair of sump pumps to protect your property from flooding and water damage.",
      imageSrc: "/Images/basement protection.jpeg",
      link: "/sump-pump",
      tag: { text: "RELIABLE", highlight: false }
    },
    {
      title: "Commercial Plumbing",
      description: "Comprehensive plumbing solutions for businesses. From regular maintenance to emergency repairs, we ensure your commercial property's plumbing systems operate efficiently with minimal disruption.",
      imageSrc: "/Images/restaurant plumbing system.avif",
      link: "/commercial-plumbing",
      tag: null
    }
  ];

  const otherServices = [
    "Leak Detection",
    "Fixture Installation",
    "Gas Line Services",
    "Sewer Line Repair",
    "Backflow Prevention",
    "Water Treatment Systems",
    "Hydro Jetting",
    "Garbage Disposal",
    "Water Line Services"
  ];

  return (
    <main>
      <PageHeader title="Plumbing Services" />
      <div className="container-dental pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              link={service.link}
              tag={service.tag}
            />
          ))}
        </div>

        {/* Other Services Section */}
        <div className="mt-16 bg-dental-lightBlue rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-heading text-dental-dark mb-6">Other Services</h2>
              <p className="text-lg text-dental-dark mb-8">
                Welcome to our premier plumbing services. Our experienced team of licensed plumbers is dedicated to providing 
                reliable and efficient solutions for all your plumbing needs. From routine maintenance to complex installations, 
                we deliver quality workmanship and exceptional customer service for both residential and commercial properties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                    <span className="text-dental-dark">{service}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span className="text-dental-dark">And more</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
                <h3 className="text-xl font-heading text-dental-dark mb-4 text-center">Need Immediate Assistance?</h3>
                <p className="text-center mb-6">
                  Professional plumbing services available 24/7
                </p>
                <EmergencyCallButton />
                <div className="mt-4">
                  <ScheduleServiceButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
