import React, { useState, useEffect } from 'react';
import { 
  MapPin, Mail, Phone, 
  Facebook, Instagram, Twitter, Linkedin, Youtube, 
  Menu, X, ChevronRight
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50 C 20 15, 80 15, 80 50" stroke="#0F7A4D" strokeWidth="12" strokeLinecap="round" className="opacity-90" />
        <path d="M80 50 C 80 85, 20 85, 20 50" stroke="#0A5937" strokeWidth="12" strokeLinecap="round" />
        <circle cx="20" cy="50" r="8" fill="#0F7A4D" />
        <circle cx="80" cy="50" r="8" fill="#0A5937" />
      </svg>
    </div>
    <span className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-800 uppercase">
      Eco<span className="text-eco">Green</span>
    </span>
  </div>
);

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'Company', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'EPR', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Sustainability', href: '#' },
  { name: 'Careers', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-white flex flex-col relative z-50 font-sans">
      {/* Top bar (Hidden on smaller screens, shown on lg and up) */}
      <div className="hidden lg:flex w-full h-11 bg-eco-light justify-between items-stretch transition-all duration-300"
           style={{ height: scrolled ? '0px' : '44px', opacity: scrolled ? 0 : 1, overflow: 'hidden' }}>
        
        {/* Contact Info (Left) */}
        <div className="flex items-center gap-6 xl:gap-8 px-6 xl:px-12 text-[13px] font-medium text-eco-dark">
          <a href="#" className="flex items-center gap-2 hover:text-eco transition-colors group">
            <MapPin size={16} className="text-eco-gold group-hover:scale-110 transition-transform" />
            <span>479, Habibpur, Dadri, Gr. Noida</span>
          </a>
          <a href="mailto:operation@ecogreen.eco" className="flex items-center gap-2 hover:text-eco transition-colors group">
            <Mail size={16} className="text-eco-gold group-hover:scale-110 transition-transform" />
            <span>operation@ecogreen.eco</span>
          </a>
          <a href="tel:+919319253708" className="flex items-center gap-2 hover:text-eco transition-colors group">
            <Phone size={16} className="text-eco-gold group-hover:scale-110 transition-transform" />
            <span>+91 93192 53708</span>
          </a>
        </div>
        
        {/* Socials & Top Links (Right) */}
        <div className="flex items-stretch">
          {/* Slanted Container */}
          <div className="bg-eco text-white flex items-center px-6 xl:px-12 relative h-full" 
               style={{ clipPath: 'polygon(1.5rem 0, 100% 0, 100% 100%, 0 100%)', marginLeft: '-1.5rem', paddingLeft: '3rem' }}>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mr-8 xl:mr-10">
              {[
                { Icon: Facebook, filled: true },
                { Icon: Instagram },
                { Icon: Twitter, filled: true },
                { Icon: Linkedin, filled: true },
                { Icon: Youtube }
              ].map(({ Icon, filled }, i) => (
                <a key={i} href="#" className="bg-white/20 p-[5px] rounded-full hover:bg-white hover:text-eco transition-all duration-300 transform hover:-translate-y-0.5">
                  <Icon size={13} strokeWidth={filled ? 0 : 2} fill={filled ? "currentColor" : "none"} />
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-4 text-[13px] font-semibold tracking-wide">
              <a href="#" className="hover:text-eco-gold transition-colors">Our Impact</a>
              <span className="w-px h-3.5 bg-white/40"></span>
              <a href="#" className="hover:text-eco-gold transition-colors">Call Back Request</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav (Sticky) */}
      <div className={`w-full border-b border-gray-100 bg-white sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4 xl:py-5'}`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 xl:px-12 flex justify-between items-center h-full">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 relative z-50">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-[15px] font-semibold transition-colors duration-300 relative group ${
                  link.active ? 'text-eco' : 'text-gray-600 hover:text-eco'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-eco transform origin-left transition-transform duration-300 ${
                  link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden xl:flex flex-shrink-0 pl-4">
            <a href="#" className="bg-eco hover:bg-eco-dark text-white px-7 py-3 rounded text-[14px] font-bold tracking-wide shadow-[0_4px_14px_0_rgba(15,122,77,0.39)] hover:shadow-[0_6px_20px_rgba(15,122,77,0.23)] hover:-translate-y-0.5 transition-all duration-300">
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="xl:hidden p-2 text-gray-600 hover:text-eco transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
           
      {/* Mobile Menu Panel */}
      <div 
        className={`xl:hidden fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="h-[88px] flex items-center px-6 border-b border-gray-100">
          <span className="text-xl font-bold text-gray-800 uppercase tracking-tight">Menu</span>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col">
          <nav className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between p-3 rounded-lg font-semibold transition-colors ${
                  link.active ? 'bg-eco/10 text-eco' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
                <ChevronRight size={18} className={link.active ? 'text-eco' : 'text-gray-300'} />
              </a>
            ))}
          </nav>
          
          <a href="#" className="bg-eco text-white w-full py-4 rounded-lg font-bold tracking-wide text-center mb-8 shadow-[0_4px_14px_0_rgba(15,122,77,0.39)]">
            GET IN TOUCH
          </a>

          {/* Mobile Contact Info */}
          <div className="mt-auto border-t border-gray-100 pt-8 flex flex-col gap-5 text-[15px] text-gray-600">
            <a href="#" className="flex items-center gap-3">
              <MapPin size={20} className="text-eco-gold flex-shrink-0" />
              <span>479, Habibpur, Dadri, Gr. Noida</span>
            </a>
            <a href="mailto:operation@ecogreen.eco" className="flex items-center gap-3">
              <Mail size={20} className="text-eco-gold flex-shrink-0" />
              <span>operation@ecogreen.eco</span>
            </a>
            <a href="tel:+919319253708" className="flex items-center gap-3">
              <Phone size={20} className="text-eco-gold flex-shrink-0" />
              <span>+91 93192 53708</span>
            </a>
          </div>
          
          {/* Mobile Socials */}
          <div className="flex items-center gap-6 mt-8 pb-4">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-eco transition-colors">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
