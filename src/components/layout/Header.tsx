'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, X } from 'lucide-react';
import EmergencyCallButton from './EmergencyCallButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white text-[rgb(35,35,52)] sticky top-0 z-50 shadow-md">
      <div className="relative">
        {/* Top Banner */}
        <div className="bg-[#EC7129] py-2 text-center text-sm md:text-base text-black">
          Available 24/7 - Call (647) 716-5155        </div>

        {/* Main Header */}
        <div className="container-dental py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/Etobicoke Plumbing - Logo.png"
              alt="Etobicoke Plumbing Logo"
              width={312}
              height={808}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors flex items-center">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/emergency-plumbing" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Emergency Plumbing
                </Link>
                <Link href="/drain-cleaning" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Drain Cleaning
                </Link>
                <Link href="/water-heater" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Water Heater Services
                </Link>
                <Link href="/bathroom-remodeling" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Bathroom Remodeling
                </Link>
                <Link href="/pipe-services" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Pipe Services
                </Link>
                <Link href="/sump-pump" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Sump Pump Services
                </Link>
                <Link href="/commercial-plumbing" className="block px-4 py-2 text-sm text-[rgb(35,35,52)] hover:bg-[#EC7129]">
                  Commercial Plumbing
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors">
              About Us
            </Link>
            <Link href="/testimonials" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors">
              Reviews
            </Link>
            <Link href="/service-area" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors">
              Service Area
            </Link>
            <Link href="/careers" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone and Schedule Service */}
          <div className="hidden md:flex items-center space-x-4">
            <EmergencyCallButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container-dental py-4">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
                <Image
                  src="/Etobicoke Plumbing - Logo.png"
                  alt="Etobicoke Plumbing Logo"
                  width={312}
                  height={808}
                  className="h-24 w-auto"
                />
              </Link>
              <button
                className="p-2 text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <div className="py-2">
                <h3 className="text-xl text-[rgb(35,35,52)] mb-2">Services</h3>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/emergency-plumbing" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Emergency Plumbing
                  </Link>
                  <Link href="/drain-cleaning" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Drain Cleaning
                  </Link>
                  <Link href="/water-heater" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Water Heater Services
                  </Link>
                  <Link href="/bathroom-remodeling" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Bathroom Remodeling
                  </Link>
                  <Link href="/pipe-services" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Pipe Services
                  </Link>
                  <Link href="/sump-pump" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Sump Pump Services
                  </Link>
                  <Link href="/commercial-plumbing" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-1" onClick={closeMenu}>
                    Commercial Plumbing
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-2 text-xl" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="/testimonials" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-2 text-xl" onClick={closeMenu}>
                Reviews
              </Link>
              <Link href="/service-area" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-2 text-xl" onClick={closeMenu}>
                Service Area
              </Link>
              <Link href="/careers" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-2 text-xl" onClick={closeMenu}>
                Careers
              </Link>
              <Link href="/contact" className="text-[rgb(35,35,52)] hover:text-[#EC7129] transition-colors py-2 text-xl" onClick={closeMenu}>
                Contact
              </Link>
              <div className="pt-6 flex flex-col space-y-4">
                <EmergencyCallButton />
                <Link href="/contact" className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors text-center" onClick={closeMenu}>
                  Schedule a Service
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
