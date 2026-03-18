import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">About Our Company</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Plumbing Services Since 2008</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Our Story</h2>
            <p className="mb-4">
              For over 15 years, we've been providing top-quality plumbing services to homes and businesses throughout the Greater Toronto Area. What started as a small family business has grown into one of the most trusted plumbing companies in the region.
            </p>
            <p className="mb-4">
              Our success is built on our commitment to excellence, integrity, and customer satisfaction. We believe in doing the job right the first time and treating every customer's home as if it were our own.
            </p>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Integrity in every interaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Quality workmanship guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Respect for customers and their property</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Continuous learning and improvement</span>
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
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800"
              alt="Our Professional Team"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dental-lightBlue p-4 rounded-xl text-center">
                <div className="text-dental-primary font-bold text-3xl mb-1">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-dental-lightBlue p-4 rounded-xl text-center">
                <div className="text-dental-primary font-bold text-3xl mb-1">10k+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-dental-dark mb-6">Meet Our Expert Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our licensed plumbers bring years of experience and expertise to every job. We're proud to have some of the most skilled professionals in the industry.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-heading text-xl mb-1">John Smith</h3>
                <p className="text-dental-primary">Master Plumber</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-heading text-xl mb-1">Mike Johnson</h3>
                <p className="text-dental-primary">Senior Technician</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-heading text-xl mb-1">Sarah Wilson</h3>
                <p className="text-dental-primary">Operations Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#F9FAFB] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading mb-4 text-dental-dark">Ready to Work with Us?</h2>
          <p className="mb-6 text-dental-dark">Experience our professional plumbing services firsthand.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <ScheduleServiceButton />
            <EmergencyCallButton />
          </div>
        </div>
      </div>
    </main>
  );
}