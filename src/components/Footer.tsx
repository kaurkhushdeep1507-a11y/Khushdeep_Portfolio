import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 text-left" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-200">

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              New Delhi, India
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              +91 98181 35834
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              kaurkhushdeep1507@gmail.com
            </span>
          </div>

        </div>

        {/* Copyright Row */}
        <div className="pt-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
            © {new Date().getFullYear()} KHUSHDEEP KAUR DESIGN. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}