import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';

const HeroSection = () => {
  return (
    <section className="bg-[#F9FAFB] pt-6 pb-10 md:pb-16 relative overflow-hidden">
      {/* Background Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>

      <div className="container-dental relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
              Your Trusted Plumber in Etobicoke, ON
            </div>
            <h1 className="text-[rgb(35,35,52)] text-4xl md:text-5xl lg:text-6xl mb-4 font-heading">
              Expert Plumbing Services
            </h1>
            <p className="text-lg mb-6 text-[rgb(35,35,52)]">
              Serving the Greater Toronto Area with Professional Plumbing Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link href="/contact" className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors">
                Schedule a Service
              </Link>
              <EmergencyCallButton />
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="relative">
              <Image
                src="/plumbing-team.jpg"
                alt="Professional Plumbing Services"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-[#EC7129] text-white py-2 px-4 rounded-full font-medium">
                24/7 Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
