import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Team Member Card Component
const TeamMemberCard = ({ name, title, description, imageSrc, link }: {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-heading text-dental-dark mb-2">{name}</h3>
        <p className="text-dental-primary font-medium mb-4">{title}</p>
        <p className="text-dental-dark mb-6">{description}</p>
        <div className="flex justify-end">
          <Link href={link} className="dental-btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function MeetOurTeamPage() {
  const teamMembers = [
    {
      name: "John Smith",
      title: "Master Plumber",
      description: "John Smith is a dedicated plumbing professional with over 15 years of experience in residential and commercial plumbing. He leads our emergency response team.",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      link: "/about"
    },
    {
      name: "Mike Johnson",
      title: "Senior Technician",
      description: "Mike specializes in commercial plumbing systems and has extensive experience with large-scale projects. He oversees our commercial maintenance programs.",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      link: "/about"
    },
    {
      name: "Sarah Wilson",
      title: "Operations Manager",
      description: "Sarah ensures our team operates efficiently and maintains our high service standards. She coordinates our emergency response and customer service teams.",
      imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
      link: "/about"
    }
  ];

  return (
    <main>
      <div className="bg-[#F9FAFB] py-12 mb-12">
        <div className="container-dental">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[rgb(35,35,52)] mb-4">Meet Our Team</h1>
          <p className="text-xl text-[rgb(35,35,52)]">Professional Plumbing Experts at Your Service</p>
        </div>
      </div>

      <div className="container-dental pb-16">
        {/* Introduction */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading text-dental-dark mb-6">Our Plumbing Care Family</h2>
          <p className="text-lg text-dental-dark mb-4">
            At Etobicoke Plumbing, our team is dedicated to providing exceptional plumbing services in a professional,
            reliable manner. Our experienced professionals combine expertise with a
            customer-focused approach, ensuring that every client receives personalized attention.
          </p>
          <p className="text-lg text-dental-dark">
            We're proud to offer multilingual services and specialized care for clients of all needs,
            including those with unique requirements. Get to know the friendly faces behind our practice below!
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imageSrc={member.imageSrc}
              link={member.link}
            />
          ))}
        </div>

        {/* Join Our Team Banner */}
        <div className="mt-16 bg-dental-lightBlue rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading text-dental-dark mb-4">Join Our Growing Team</h2>
          <p className="text-lg text-dental-dark mb-6">
            We're always looking for talented plumbers and technicians to join our team. 
            If you're passionate about providing excellent service and want to grow your career, we'd love to hear from you.
          </p>
          <Link 
            href="/careers" 
            className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors inline-block"
          >
            View Career Opportunities
          </Link>
        </div>
      </div>
    </main>
  );
}
