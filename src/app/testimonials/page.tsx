import React from 'react';
import Link from 'next/link';

const TestimonialCard = ({
  content,
  author,
  service,
  rating,
  date
}: {
  content: string;
  author: string;
  service: string;
  rating: number;
  date: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-dental-primary">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-dental-dark">{content}</p>
      <div className="border-t pt-4">
        <div className="font-medium text-dental-dark">{author}</div>
        <div className="text-sm text-dental-primary">{service}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      content: "Excellent 24/7 response! They arrived within an hour of my call and fixed our burst pipe quickly. Very professional and clean work.",
      author: "James Wilson",
      service: "24/7 Plumbing",
      rating: 5,
      date: "March 2024"
    },
    {
      content: "Fantastic job on our bathroom renovation. The team was professional, punctual, and the quality of work exceeded our expectations.",
      author: "Sarah Thompson",
      service: "Bathroom Remodeling",
      rating: 5,
      date: "February 2024"
    },
    {
      content: "Best plumbing service in the GTA! They installed our new water heater efficiently and explained everything clearly.",
      author: "Michael Chen",
      service: "Water Heater Installation",
      rating: 5,
      date: "February 2024"
    },
    {
      content: "Very reliable and professional service. They cleaned our drains thoroughly and provided great maintenance tips.",
      author: "Emily Rodriguez",
      service: "Drain Cleaning",
      rating: 5,
      date: "January 2024"
    },
    {
      content: "Outstanding commercial plumbing service. They worked after hours to minimize disruption to our restaurant operations.",
      author: "David Kim",
      service: "Commercial Plumbing",
      rating: 5,
      date: "January 2024"
    },
    {
      content: "The team did an amazing job installing our sump pump. Very knowledgeable and professional service.",
      author: "Lisa Anderson",
      service: "Sump Pump Installation",
      rating: 5,
      date: "December 2023"
    }
  ];

  const stats = [
    { number: "4.9", text: "Average Rating" },
    { number: "500+", text: "Reviews" },
    { number: "98%", text: "Customer Satisfaction" }
  ];

  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <div className="text-[#EC7129] text-sm uppercase font-medium tracking-wider mb-3">
            Your Trusted Plumber in Etobicoke, ON
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Customer Reviews</h1>
          <p className="text-xl text-[rgb(35,35,52)]">See What Our Customers Say About Our Services</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center min-w-[200px]">
              <div className="text-4xl font-bold text-dental-primary mb-2">{stat.number}</div>
              <div className="text-dental-dark">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Review CTA */}
        <div className="flex justify-center items-center">
          <div className="bg-dental-lightBlue rounded-2xl p-12 w-full max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-heading text-dental-dark mb-6">Share Your Experience</h2>
              <p className="text-dental-dark mb-8 max-w-xl">
                Had a great experience with our service? We'd love to hear about it!
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#3E80ED] text-white px-8 py-3 rounded-full hover:opacity-90 transition-colors text-center"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}