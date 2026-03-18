import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function SumpPumpPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Sump Pump Services</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Protect Your Home from Water Damage</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Professional Sump Pump Solutions</h2>
            <p className="mb-4">
              Keep your basement dry and protected with our comprehensive sump pump services. We offer installation, maintenance, and repair to ensure your system works when you need it most.
            </p>
            <h3 className="text-xl font-heading text-dental-dark mb-4">Our Sump Pump Services:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>New sump pump installation</li>
              <li>Repair and maintenance</li>
              <li>Battery backup systems</li>
              <li>Pump replacement</li>
              <li>System inspections</li>
              <li>Preventive maintenance</li>
            </ul>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Signs You Need Sump Pump Service:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Unusual noises</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Frequent cycling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Visible rust or damage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Basement moisture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Age over 7 years</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link href="/book" className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors">
                Schedule Service
              </Link>
              <a href="tel:(416)371-3330" className="border-2 border-[#EC7129] bg-transparent text-[#EC7129] hover:bg-[#EC7129] hover:text-white transition-colors rounded-full py-3 px-6 inline-flex items-center gap-2">
                <Phone size={18} className="text-[#EC7129] group-hover:text-white" />
                <span>Emergency Call</span>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800"
              alt="Sump Pump Services"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Benefits of Professional Sump Pump Service</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Prevent basement flooding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Protect your investment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Peace of mind during storms</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Extended equipment life</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>24/7 emergency support</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-dental-dark text-sm">
                  Ask about our free sump pump inspection for first-time customers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}