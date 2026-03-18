import React from 'react';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';
import ScheduleServiceButton from '@/components/layout/ScheduleServiceButton';

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container-dental">
        <div className="text-center mb-12">
          <div className="text-dental-primary text-sm uppercase font-medium tracking-wider mb-3">
            Contact Us
          </div>
          <h2 className="text-dental-dark text-3xl md:text-4xl mb-4 font-heading">Get in Touch</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-dark">
            Our team is ready to assist with all your plumbing needs. Contact us today for professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Contact */}
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-dental-lightBlue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Call Us</h3>
            <p className="mb-4">Available 24/7 for assistance</p>
            <EmergencyCallButton />
          </div>

          {/* Location */}
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-dental-lightBlue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Visit Us</h3>
            <p className="mb-4">535 The East Mall #203<br />Etobicoke, ON, M9B 4A4</p>
            <Link href="/location" className="text-dental-primary hover:opacity-80 transition-colors font-medium">
              Get Directions →
            </Link>
          </div>

          {/* Book Online */}
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-dental-lightBlue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Book Online</h3>
            <p className="mb-4">Schedule your service at your convenience</p>
            <ScheduleServiceButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
