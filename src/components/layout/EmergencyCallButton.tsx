import { Phone } from 'lucide-react';

export default function EmergencyCallButton() {
  return (
    <a 
      href="tel:(647)716-5155" 
      className="border-2 border-[#EC7129] bg-transparent text-[#EC7129] hover:bg-[#EC7129] hover:text-white transition-colors rounded-full py-3 px-6 inline-flex items-center justify-center gap-2 group"
    >
      <Phone size={18} className="text-[#EC7129] group-hover:text-white transition-colors" />
      <span>Emergency Call</span>
    </a>
  );
}