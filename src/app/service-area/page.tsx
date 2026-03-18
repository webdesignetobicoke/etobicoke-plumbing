import React from 'react';
import Link from 'next/link';
import CallNowButton from '@/components/layout/CallNowButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

export default function ServiceAreaPage() {
  const serviceAreas = [
    {
      region: "Toronto",
      areas: ["Etobicoke", "North York", "Scarborough", "Downtown", "East York", "York"]
    },
    {
      region: "GTA West",
      areas: ["Mississauga", "Brampton", "Oakville", "Milton", "Georgetown", "Burlington"]
    },
    {
      region: "GTA East",
      areas: ["Pickering", "Ajax", "Whitby", "Oshawa", "Markham", "Richmond Hill"]
    },
    {
      region: "GTA North",
      areas: ["Vaughan", "Thornhill", "Aurora", "Newmarket", "Richmond Hill", "King City"]
    }
  ];

  const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Water Heater Services",
    "Bathroom Remodeling",
    "Pipe Repairs",
    "Sump Pump Services",
    "Commercial Plumbing"
  ];

  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Service Area</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Serving the Greater Toronto Area with Expert Plumbing Services</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        {/* Map Section */}
        <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-heading text-[rgb(35,35,52)] mb-4">Fast Response Throughout the GTA</h2>
              <p className="mb-6 text-[rgb(35,35,52)]">
                Our strategically located team provides quick response times across the Greater Toronto Area. 
                Whether you're in downtown Toronto or the surrounding regions, we're just a call away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallNowButton />
                <ScheduleServiceButton />
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289923532!2d-79.51814267766913!3d43.71840381804413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">{area.region}</h3>
              <ul className="space-y-2">
                {area.areas.map((subArea, subIndex) => (
                  <li key={subIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                    <span>{subArea}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-[#F9FAFB] rounded-2xl p-8">
          <h2 className="text-2xl font-heading text-[rgb(35,35,52)] mb-6 text-center">Available Services in All Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                {service}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="mb-4 text-[rgb(35,35,52)]">Not sure if we service your area? Give us a call!</p>
            <div className="w-full sm:w-auto inline-block">
              <CallNowButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}