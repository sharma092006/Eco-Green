import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Leaf, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#051009] pt-20 pb-10 overflow-hidden font-sans border-t border-white/5">
      {/* Subtle animated background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-eco/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0a1c11]/40 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }}></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 bg-eco rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,202,109,0.3)] group-hover:shadow-[0_0_25px_rgba(59,202,109,0.6)] group-hover:scale-105 transition-all duration-300">
                <Leaf className="text-white" size={20} />
              </div>
              <span className="text-white text-2xl font-black tracking-tight group-hover:text-eco transition-colors duration-300">
                ECO<span className="font-light">GREEN</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Eco Green is a household name for having been the pioneer of Recycling and Waste Disposal Services in country from the corporate clients... 
              <a href="#" className="text-eco hover:text-white transition-colors duration-300 ml-1 font-medium">Read More</a>
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-eco mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <p className="text-gray-400 text-[14px] leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  <strong className="text-white font-medium">Location:</strong> Eco Green Recyclers (P) Limited<br/>
                  Plot No. - 479, Habibpur, Main Dadri Road, Greater Noida - 201306, Uttar Pradesh, India.
                </p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Phone className="text-eco shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <p className="text-gray-400 text-[14px] group-hover:text-gray-200 transition-colors duration-300">
                  <strong className="text-white font-medium">Phone:</strong> +91 93192 53708
                </p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Mail className="text-eco shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <p className="text-gray-400 text-[14px] group-hover:text-gray-200 transition-colors duration-300">
                  <strong className="text-white font-medium">E-mail:</strong> <a href="mailto:operation@ecogreen.eco" className="text-eco hover:text-white transition-colors">operation@ecogreen.eco</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Spacer for layout */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Company */}
            <div className="flex flex-col gap-6">
              <h4 className="text-eco font-bold text-lg tracking-wide relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-eco/50 after:rounded-full">Company</h4>
              <ul className="flex flex-col gap-3.5 mt-2">
                {['Who We are', 'Director\'s Message', 'Mission & Visions', 'Success Stories', 'Customer Reviews', 'FAQs', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 text-[14px] hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-eco/0 group-hover:bg-eco mr-0 group-hover:mr-2.5 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="flex flex-col gap-6">
              <h4 className="text-eco font-bold text-lg tracking-wide relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-eco/50 after:rounded-full">Solutions</h4>
              <ul className="flex flex-col gap-3.5 mt-2">
                {['eWaste Recycling', 'Plastic Recycling', 'Lithium Battery Recycling', 'Paper Recycling', 'Metal Recycling'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 text-[14px] hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-eco/0 group-hover:bg-eco mr-0 group-hover:mr-2.5 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Other Link */}
            <div className="flex flex-col gap-6">
              <h4 className="text-eco font-bold text-lg tracking-wide relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-eco/50 after:rounded-full">Other Link</h4>
              <ul className="flex flex-col gap-3.5 mt-2">
                {['Products', 'Sustainability', 'Gallery', 'Blogs', 'CSR', 'Our Impact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 text-[14px] hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-eco/0 group-hover:bg-eco mr-0 group-hover:mr-2.5 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left text-gray-400 text-[13px]">
            <p>
              © 2026-27 <span className="text-white font-medium">Eco Green</span>. All Rights Reserved. 
              <span className="hidden sm:inline mx-3">|</span> 
              <span className="block sm:inline mt-2 sm:mt-0">
                Crafted with <Heart className="inline-block text-red-500 fill-red-500 mx-1 w-3.5 h-3.5 animate-pulse" /> by Shashwat India
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-4 text-[13px] text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' }
              ].map((Social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  aria-label={Social.label}
                  className="w-9 h-9 rounded-full bg-[#0a1c11] border border-eco/20 flex items-center justify-center text-eco hover:bg-eco hover:text-[#051009] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,202,109,0.4)]"
                >
                  <Social.icon size={15} />
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
