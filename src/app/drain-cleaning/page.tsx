import React from 'react';
import Image from 'next/image';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

export default function DrainCleaningPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Drain Cleaning Services</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Drain Cleaning Solutions</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Expert Drain Cleaning Solutions</h2>
            <p className="mb-4">
              Don't let clogged drains disrupt your daily routine. Our professional drain cleaning services use state-of-the-art equipment and techniques to clear blockages and keep your plumbing system flowing smoothly.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Hydro jetting services</li>
              <li>Drain snaking</li>
              <li>Video camera inspection</li>
              <li>Main line cleaning</li>
              <li>Emergency drain service</li>
            </ul>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Common Signs of Drain Problems:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Slow draining</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Gurgling sounds from drains</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Unpleasant odors</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Multiple clogged drains</span>
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
              src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?w=800"
              alt="Drain Cleaning Service"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Why Choose Our Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Advanced equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Licensed technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Same-day service</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Long-term solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}