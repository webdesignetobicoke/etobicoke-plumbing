import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function PipeServicesPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Pipe Services</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Pipe Installation & Repair</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Expert Pipe Services</h2>
            <p className="mb-4">
              Whether you need new pipe installation or repair of existing plumbing, our experienced team provides reliable solutions using high-quality materials and proven techniques.
            </p>
            <h3 className="text-xl font-heading text-dental-dark mb-4">Our Pipe Services Include:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>New pipe installation</li>
              <li>Pipe repair and replacement</li>
              <li>Leak detection and repair</li>
              <li>Copper and PEX piping</li>
              <li>Water line services</li>
              <li>Sewer line repair</li>
            </ul>
            <div className="bg-dental-lightBlue p-6 rounded-xl mb-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Signs You Need Pipe Service:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Visible leaks or water damage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Low water pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Discolored or rusty water</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Unusual sounds in pipes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>High water bills</span>
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
              src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800"
              alt="Pipe Services"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
            <div className="mt-8 bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Our Pipe Service Process</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Thorough inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Advanced diagnostic tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Quality materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                  <span>Warranty protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}