import React from 'react';
import Link from 'next/link';

const ScheduleServiceButton = () => {
  return (
    <Link 
      href="/book" 
      className="bg-[#EC7129] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors"
    >
      Schedule a Service
    </Link>
  );
};

export default ScheduleServiceButton;