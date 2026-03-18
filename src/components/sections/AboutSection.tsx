import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-dental">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
              Your Trusted Plumber in Etobicoke, ON
            </div>
            <h2 className="text-[rgb(35,35,52)] text-3xl md:text-4xl mb-6 font-heading">Professional Plumbing Services You Can Trust</h2>
            <p className="text-[rgb(35,35,52)] mb-4">
              With over 15 years of experience, our licensed plumbers provide comprehensive plumbing solutions 
              for residential and commercial properties throughout the Greater Toronto Area.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#EC7129] rounded-full"></div>
                <span className="text-[rgb(35,35,52)]">Licensed and Insured Plumbers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#EC7129] rounded-full"></div>
                <span className="text-[rgb(35,35,52)]">Available 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#EC7129] rounded-full"></div>
                <span className="text-[rgb(35,35,52)]">Professional Service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#EC7129] rounded-full"></div>
                <span className="text-[rgb(35,35,52)]">Transparent Pricing</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors">
                Schedule a Service
              </Link>
              <EmergencyCallButton />
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800"
              alt="Professional Plumber"
              width={600}
              height={400}
              className="rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="text-[#EC7129] font-bold text-xl">15+</div>
                <div className="text-[rgb(35,35,52)] text-sm">Years of<br/>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
