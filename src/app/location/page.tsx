import React from 'react';
import Link from 'next/link';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';

export default function LocationPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Our Location</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Serving the Greater Toronto Area</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289923532!2d-79.51814267766913!3d43.71840381804413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading text-dental-dark mb-4">Visit Our Office</h2>
                <p className="mb-4">
                  Our office is conveniently located in Etobicoke, serving the Greater Toronto Area 
                  with professional plumbing services.
                </p>
                <address className="not-italic mb-6">
                  <div className="font-medium text-lg mb-2">Address:</div>
                  123 Plumbing Street<br />
                  Etobicoke, ON M8V 1X8
                </address>
                <div className="mb-6">
                  <div className="font-medium text-lg mb-2">Hours of Operation:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Monday - Friday</div>
                    <div>8:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>9:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                  <p className="mt-2 text-sm">24/7 Available for Emergencies</p>
                </div>
                <div className="flex gap-4">
                  <EmergencyCallButton />
                </div>
              </div>

              <div className="bg-[#F9FAFB] p-6 rounded-xl">
                <h3 className="text-xl font-heading text-dental-dark mb-4">Service Areas</h3>
                <p className="mb-4">We proudly serve the following areas:</p>
                <ul className="grid grid-cols-2 gap-2">
                  <li>Etobicoke</li>
                  <li>Toronto</li>
                  <li>Mississauga</li>
                  <li>North York</li>
                  <li>Scarborough</li>
                  <li>York</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
