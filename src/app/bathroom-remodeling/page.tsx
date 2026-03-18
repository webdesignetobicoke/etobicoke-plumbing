import React from 'react';
import Image from 'next/image';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

export default function BathroomRemodelingPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <p className="text-xl text-[rgb(35,35,52)]">Transform Your Bathroom with Expert Plumbing Solutions</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              Transform your bathroom into a modern, functional space with our expert remodeling services. We handle all plumbing aspects of your bathroom renovation, ensuring everything is installed correctly and up to code.
            </p>
            <h3 className="text-xl font-heading text-dental-dark mb-4">Our Remodeling Services Include:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Fixture installation and upgrades</li>
              <li>Shower and tub installation</li>
              <li>Toilet replacement and installation</li>
              <li>Vanity and sink installation</li>
              <li>Water line modifications</li>
              <li>Drain system updates</li>
            </ul>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Popular Upgrades:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Low-flow toilets and fixtures</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Walk-in showers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Luxury shower systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Double vanities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Modern faucets and hardware</span>
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
              src="/Images/water heaters.avif"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
              alt="Modern bathroom with water heater installation"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">The Remodeling Process</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Initial consultation and design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Detailed project planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Quality inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Final walkthrough</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-dental-dark text-sm">
                  Currently offering 10% off on complete bathroom remodels. 
                  Contact us today to learn more about this limited-time offer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}