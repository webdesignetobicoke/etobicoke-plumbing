import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

export default function CommercialPlumbingPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Commercial Plumbing Services</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Solutions for Businesses</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Complete Commercial Plumbing Solutions</h2>
            <p className="mb-4">
              We provide comprehensive plumbing services for businesses of all sizes. Our team understands the unique needs of commercial properties and delivers reliable solutions with minimal disruption to your operations.
            </p>
            <h3 className="text-xl font-heading text-dental-dark mb-4">Commercial Services Include:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Commercial pipe repair and installation</li>
              <li>Water heater services</li>
              <li>Drain cleaning and maintenance</li>
              <li>Backflow prevention</li>
              <li>Emergency plumbing services</li>
              <li>Preventive maintenance plans</li>
            </ul>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Industries We Serve:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Restaurants and food service</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Office buildings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Retail spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Hotels and hospitality</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Industrial facilities</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <ScheduleServiceButton />
              <EmergencyCallButton />
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112c4e5b44?w=800"
              alt="Commercial Plumbing Services"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Why Choose Our Commercial Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>24/7 emergency response</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Licensed commercial plumbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Customized maintenance plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Industry-leading warranties</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Competitive pricing</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-dental-dark text-sm">
                  Ask about our preventive maintenance contracts for businesses.
                  Save money and prevent costly emergencies with regular maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}