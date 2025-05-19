import React from "react";
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
   <footer className="w-full bg-black text-white mt-12">
  <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pl-[220px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Info & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Rosmeo Parada</h3>
            <p className="text-gray-300 text-sm mb-4">
              Personal thoughts, ideas, and insights on design and technology.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/rosmeoo/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-400 transition-all duration-300">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://x.com/_rosmeo" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-400 transition-all duration-300">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/mauricio-parada-a67470267/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-400 transition-all duration-300">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Email: rosmeo43@gmail.com</p>
              <p>Twitter: @_rosmeo</p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pl-[220px]">
          <span className="text-sm font-light text-gray-400 text-center">
            © {currentYear} Rosmeo Parada. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
