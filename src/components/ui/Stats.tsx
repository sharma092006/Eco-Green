import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Trophy, Users, Handshake, ArrowRight } from 'lucide-react';

// Custom Hook for smooth counting animation and visibility tracking
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return { count, ref, isVisible };
}

const StatItem = ({ icon: Icon, end, label, suffix = '', index = 0 }: any) => {
  const { count, ref, isVisible } = useCountUp(end);

  return (
    <div 
      ref={ref} 
      className={`flex items-center gap-3 p-4 sm:p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/10 hover:border-eco/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,122,77,0.2)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* Icon Container */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-eco/30 to-eco/5 border border-eco/20 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon size={20} className="text-eco transition-colors duration-500 group-hover:text-white" />
      </div>
      
      {/* Numbers & Label */}
      <div>
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums transition-colors duration-500 group-hover:text-eco drop-shadow-md">
            {count}
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-eco">{suffix}</span>
        </div>
        <span className="text-gray-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-gray-200 block mt-0.5">
          {label}
        </span>
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="w-full py-10 lg:py-14 relative overflow-hidden bg-[#051009] font-sans">
      
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 w-full h-full z-0">
         <img 
           src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2000&q=80" 
           alt="Nature Texture" 
           className="w-full h-full object-cover opacity-15 mix-blend-overlay grayscale-[30%]" 
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#051009] via-[#051009]/90 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#051009]/50 via-transparent to-[#051009]/50"></div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-eco/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Text Content & CTA */}
          <div className="col-span-1 lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-eco animate-pulse shadow-[0_0_10px_rgba(59,202,109,0.8)]"></span>
              <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Our Impact</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.15] mb-3 tracking-tight drop-shadow-lg">
              We Take Action.<br/>
              To Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco to-[#3BCA6D] drop-shadow-[0_0_15px_rgba(59,202,109,0.3)]">Better Changes</span>
            </h2>
            
            <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.65] mb-6 max-w-lg">
              Committed to shaping a brighter future through meaningful change. Our proven track record and dedicated approach ensure that every action we take drives sustainable impact.
            </p>

            <button className="bg-eco hover:bg-white hover:text-gray-900 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_8px_20px_rgba(59,202,109,0.3)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 group/btn flex items-center gap-2 w-fit">
              Join Our Mission
              <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Glassmorphic Stats Grid */}
          <div className="col-span-1 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 perspective-1000">
              <StatItem icon={Briefcase} end={10} suffix="+" label="Years Experience" index={0} />
              <StatItem icon={Trophy} end={8} suffix="" label="Global Awards" index={1} />
              <StatItem icon={Users} end={342} suffix="" label="Happy Clients" index={2} />
              <StatItem icon={Handshake} end={84} suffix="" label="Active Partners" index={3} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
