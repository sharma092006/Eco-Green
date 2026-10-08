import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const materials = [
  "All Electronic Appliances",
  "Lithium Batteries",
  "Plastic",
  "Metal",
  "Books & Paper",
  "Common Waste"
];

export default function MaterialsBanner() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#093c25] overflow-hidden flex items-center justify-center">
      
      {/* Deep Background Image with Blend */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=80" 
          alt="Recycling Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#093c25]/80 mix-blend-multiply"></div>
      </div>

      {/* Ambient Animated Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1ab05a] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-slow-spin-1"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3BCA6D] rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-slow-spin-2"></div>

      {/* Background Graphic (Watermark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full animate-ping-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full animate-ping-slow delay-1000 pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-5/12 flex flex-col">
            
            {/* Subtitle with pulsing dot */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3BCA6D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3BCA6D]"></span>
              </span>
              <span className="text-[#3BCA6D] font-bold uppercase tracking-widest text-sm drop-shadow-md">
                Recycle Materials
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-8 drop-shadow-xl">
              We collect, recycle & <br className="hidden md:block lg:hidden xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3BCA6D] animate-gradient-x">
                disposal all materials
              </span>
            </h2>

            {/* Glowing separator line */}
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#3BCA6D] to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-[shimmer-sweep_3s_infinite]"></div>
            </div>

          </div>

          {/* Right Grid Column */}
          <div className="w-full lg:w-6/12 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {materials.map((material, idx) => (
                <div 
                  key={idx} 
                  className={`
                    group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 
                    flex items-center gap-4 transition-all duration-500 cursor-default
                    hover:bg-white/10 hover:border-[#3BCA6D]/50 hover:shadow-[0_0_30px_rgba(59,202,109,0.2)] hover:-translate-y-1
                  `}
                  style={{ 
                    animation: `soft-float 6s ease-in-out infinite`,
                    animationDelay: `${idx * 0.4}s` 
                  }}
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-full bg-[#3BCA6D]/10 flex items-center justify-center border border-[#3BCA6D]/30 group-hover:bg-[#3BCA6D] transition-colors duration-500 shadow-inner group-hover:shadow-[0_0_15px_rgba(59,202,109,0.5)]">
                    <CheckCircle2 size={20} className="text-[#3BCA6D] group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Text */}
                  <span className="text-white font-medium text-base md:text-lg tracking-wide group-hover:text-[#3BCA6D] transition-colors duration-300">
                    {material}
                  </span>

                  {/* Sweep highlight effect on hover */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer-sweep_0.75s_ease-out_forwards]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes soft-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slow-spin-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes slow-spin-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(-120deg); }
          66% { transform: translate(20px, -30px) rotate(-240deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }
        @keyframes shimmer-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .animate-slow-spin-1 {
          animation: slow-spin-1 20s infinite alternate linear;
        }
        .animate-slow-spin-2 {
          animation: slow-spin-2 25s infinite alternate linear;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
