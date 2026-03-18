import React from 'react';
import EmergencyCallButton from '@/components/layout/EmergencyCallButton';

export default function ContactPage() {
  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Contact Us</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Plumbing Services</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* Contact Form */}
            <h2 className="text-2xl font-heading text-[rgb(35,35,52)] mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[rgb(35,35,52)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7129] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[rgb(35,35,52)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7129] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[rgb(35,35,52)] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7129] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[rgb(35,35,52)] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7129] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12">
              <h2 className="text-2xl font-heading text-[rgb(35,35,52)] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Address</h3>
                  <p>535 The East Mall #203<br />Etobicoke, ON, M9B 4A4</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Available 24/7</h3>
                  <a href="tel:6477165155" className="text-[#EC7129] hover:underline">
                    647 716 5155
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <a href="mailto:info@plumbingservices.com" className="text-[#EC7129] hover:underline">
                    info@plumbingservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Hours */}
          <div>
            <div className="bg-[#F9FAFB] p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-medium mb-4">Hours of Operation</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="pt-4">
                  <p className="font-medium text-dental-primary">Available 24/7 for urgent plumbing needs</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact Box */}
            <div className="bg-[#F9FAFB] text-[#EC7129] p-6 rounded-xl mb-8">
              <h3 className="text-xl font-medium mb-2">Need Immediate Assistance?</h3>
              <p className="mb-4">Our team is ready to help with your urgent plumbing needs.</p>
              <a href="tel:6477165155" className="text-[#EC7129] hover:underline text-lg font-medium">
                647 716 5155
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6893921289395!2d-79.56859372346147!3d43.65406905130086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37c5c66cd35f%3A0x39f177d614928cb8!2s535%20The%20East%20Mall%20%23203%2C%20Etobicoke%2C%20ON%20M9B%204A4!5e0!3m2!1sen!2sca!4v1703729433433!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}