import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JobCard = ({ title, type, experience, description }: {
  title: string;
  type: string;
  experience: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-heading text-dental-dark mb-2">{title}</h3>
      <div className="flex gap-4 mb-4">
        <span className="bg-dental-lightBlue px-3 py-1 rounded-full text-sm">{type}</span>
        <span className="bg-dental-lightBlue px-3 py-1 rounded-full text-sm">{experience}</span>
      </div>
      <p className="text-dental-dark mb-4">{description}</p>
      <Link 
        href="/careers/apply" 
        className="text-dental-primary hover:text-dental-dark transition-colors"
      >
        Apply Now →
      </Link>
    </div>
  );
};

export default function CareersPage() {
  const benefits = [
    "Competitive salary",
    "Health benefits",
    "Paid time off",
    "Ongoing training",
    "Career growth",
    "Tool allowance",
    "Company vehicle",
    "Performance bonuses"
  ];

  const openings = [
    {
      title: "Licensed Plumber",
      type: "Full-time",
      experience: "5+ years",
      description: "Looking for experienced licensed plumbers to join our growing team. Must have strong troubleshooting skills and excellent customer service."
    },
    {
      title: "Apprentice Plumber",
      type: "Full-time",
      experience: "Entry Level",
      description: "Great opportunity for someone starting their plumbing career. Will work alongside experienced plumbers while completing apprenticeship program."
    },
    {
      title: "Service Manager",
      type: "Full-time",
      experience: "3+ years",
      description: "Seeking an experienced service manager to oversee our residential service division. Previous management experience required."
    }
  ];

  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Join Our Team</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Build Your Career with a Leading Plumbing Company</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        {/* Why Join Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-heading text-dental-dark mb-6">Why Work With Us?</h2>
            <p className="mb-6">
              We're more than just a plumbing company – we're a team of professionals dedicated to 
              delivering excellence. We believe in investing in our people and providing opportunities 
              for growth and development.
            </p>
            <div className="bg-dental-lightBlue p-6 rounded-xl">
              <h3 className="text-xl font-heading text-dental-dark mb-4">Benefits & Perks</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-dental-primary rounded-full"></div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800"
              alt="Plumbing Team"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto mb-6"
            />
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading text-dental-dark mb-6">Current Openings</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Training Program */}
        <div className="bg-dental-lightBlue rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading text-dental-dark mb-4">Professional Development Program</h2>
          <p className="text-dental-dark mb-6 max-w-2xl mx-auto">
            We believe in continuous learning and development. Join our team and benefit from our 
            comprehensive training program, mentorship opportunities, and career advancement paths.
          </p>
          <Link 
            href="/careers/apply" 
            className="bg-dental-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors inline-block"
          >
            Start Your Career With Us
          </Link>
        </div>
      </div>
    </main>
  );
}