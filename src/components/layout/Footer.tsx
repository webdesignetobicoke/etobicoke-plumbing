import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmergencyCallButton from './EmergencyCallButton';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="container-dental">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-8 inline-block">
              <Image
                src="/Etobicoke Plumbing - Logo.png"
                alt="Etobicoke Plumbing Logo"
                width={300}
                height={75}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mb-8">
              Professional plumbing solutions for residential and commercial needs. Available 24/7 for your service.
            </p>
            <div className="flex flex-col gap-6">
              <EmergencyCallButton />
              <Link 
                href="/contact" 
                className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors text-center"
              >
                Schedule a Service
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-[#EC7129] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#EC7129] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#EC7129] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#EC7129] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/emergency-plumbing" className="hover:text-[#EC7129] transition-colors">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/drain-cleaning" className="hover:text-[#EC7129] transition-colors">
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link href="/water-heater" className="hover:text-[#EC7129] transition-colors">
                  Water Heater Services
                </Link>
              </li>
              <li>
                <Link href="/bathroom-remodeling" className="hover:text-[#EC7129] transition-colors">
                  Bathroom Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EC7129] flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>535 The East Mall #203<br/>Etobicoke, ON, M9B 4A4</span>
              </p>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EC7129] flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:6477165155" className="hover:text-[#EC7129] transition-colors">
                  647 716 5155
                </a>
              </div>
              <p className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EC7129] flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@plumbingservices.com" className="hover:text-[#EC7129] transition-colors">info@plumbingservices.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Professional Plumbing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
