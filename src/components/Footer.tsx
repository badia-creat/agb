import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AGB
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">AGB Engineering</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Services Ltd</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Incorporated in August 2020, AGB Engineering Services Ltd is committed to engineering excellence, 
              delivering high-quality infrastructure and technical solutions across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063704783657&mibextid=rS40aB7S9Ucbxw6v" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@aggreybadia7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects & Gallery</Link></li>
              <li><Link to="/capability" className="hover:text-white transition-colors">Capability</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Expertise</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Mechanical Engineering</li>
              <li>Electrical Engineering</li>
              <li>Civil Engineering</li>
              <li>Fire Engineering</li>
              <li>Wet Services</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Nairobi, Kenya<br />P.O. Box 00100, AdisAbaba road off Enterprise road</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+254721133185 or +254755551790</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:agbengineering73@gmail.com" className="hover:text-white">agbengineering73@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AGB Engineering Services Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
