import React from 'react';
import Image from 'next/image';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';
import CallNowButton from '@/components/layout/CallNowButton';

export default function EmergencyPlumbingPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Available 24/7</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Plumbing Solutions When You Need Them</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Fast Response When You Need It Most</h2>
            <p className="mb-4">
              Plumbing emergencies can strike at any time, causing stress and potential property damage. Our team of expert plumbers is available 24/7 to handle any urgent plumbing situation, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Burst pipes</li>
              <li>Severe leaks</li>
              <li>Sewer backups</li>
              <li>Frozen pipes</li>
              <li>Water heater failures</li>
              <li>Overflowing toilets</li>
            </ul>
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Why Choose Our 24/7 Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Rapid response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Licensed professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Fully equipped service vehicles</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <CallNowButton />
              <ScheduleServiceButton />
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800"
              alt="Emergency Plumbing Service"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}