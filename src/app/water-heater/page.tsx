import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function WaterHeaterPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Water Heater Services</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Expert Water Heater Solutions</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Complete Water Heater Solutions</h2>
            <p className="mb-4">
              From traditional tank water heaters to modern tankless systems, our expert technicians provide comprehensive water heater services to ensure you have reliable hot water when you need it.
            </p>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Common Water Heater Issues:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Inconsistent water temperature</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Strange noises from the tank</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Water leaks around the unit</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Rusty or discolored water</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link href="/book" className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors">
                Schedule a Service
              </Link>
              <a href="tel:(416)371-3330" className="border-2 border-[#EC7129] bg-transparent text-[#EC7129] hover:bg-[#EC7129] hover:text-white transition-colors rounded-full py-3 px-6 inline-flex items-center gap-2">
                <Phone size={18} className="text-[#EC7129] group-hover:text-white" />
                <span>Emergency Call</span>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1513828583688-c52646f309c1?w=800"
              alt="Water Heater Service"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Why Choose Our Water Heater Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Expert technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Upfront pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Quality parts and equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Warranty on all services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}