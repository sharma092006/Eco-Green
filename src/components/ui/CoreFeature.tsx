import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import chooseUsImg from '../../assets/image/chooseus-1.png';

export default function CoreFeature() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 lg:py-32 bg-[#f8fcf9] overflow-hidden relative font-sans">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Image Podium */}
          <div className="col-span-1 lg:col-span-5 relative group perspective-1000 h-[450px] sm:h-[500px] lg:h-full lg:min-h-[550px]">
            {/* The Podium Card */}
            <div className="w-full h-full bg-gray-100 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(15,122,77,0.25)]">
              
              {/* Massive Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] sm:text-[180px] font-black text-white/20 pointer-events-none select-none tracking-tighter z-10 transform transition-transform duration-[2s] group-hover:scale-110 mix-blend-overlay">
                100%
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3BCA6D]/30 rounded-full blur-3xl group-hover:bg-[#3BCA6D]/40 transition-colors duration-700 z-10"></div>

              {/* The Premium Image */}
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Eco Green Services" 
                className="relative z-0 w-full h-full object-cover transform transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />

              {/* Inner Shadow / Vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-0"></div>
            </div>

            {/* Floating Glass Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-white flex items-center gap-4 animate-soft-float z-20">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-eco to-[#0c613d] flex items-center justify-center shadow-inner">
                <CheckCircle2 size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg leading-tight">Eco-Certified</p>
                <p className="text-[#d9a05b] font-bold text-xs tracking-widest uppercase mt-0.5">Guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Bento Grid */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Area */}
            <div className="mb-10">
              <span className="inline-block text-[#d9a05b] font-bold uppercase tracking-[0.2em] text-xs mb-4 bg-[#d9a05b]/10 px-4 py-2 rounded-full">
                Our Core Feature
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                Why You Should Take Our <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco to-[#3BCA6D]">
                  Eco-friendly
                </span> Services?
              </h2>
              <p className="text-gray-500 text-base lg:text-[17px] leading-[1.8] max-w-2xl">
                Choose our eco-friendly services to make a positive impact on the environment. We provide comprehensive waste management and recycling solutions designed to reduce your ecological footprint, conserve natural resources, and support a circular economy.
              </p>
            </div>

            {/* Premium Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Light Bento: Features */}
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-eco/20 transition-colors duration-500 flex flex-col justify-center gap-8">
                
                {/* Feature 1 */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-eco/10 flex items-center justify-center text-eco transform transition-all duration-300 group-hover:scale-110 group-hover:bg-eco group-hover:text-white group-hover:shadow-[0_5px_15px_rgba(15,122,77,0.3)]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg transition-colors duration-300 group-hover:text-eco">Convenient Pickup</h4>
                    <p className="text-gray-500 text-xs mt-1">Hassle-free scheduling</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"></div>

                {/* Feature 2 */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-eco/10 flex items-center justify-center text-eco transform transition-all duration-300 group-hover:scale-110 group-hover:bg-eco group-hover:text-white group-hover:shadow-[0_5px_15px_rgba(15,122,77,0.3)]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg transition-colors duration-300 group-hover:text-eco">Reducing Waste</h4>
                    <p className="text-gray-500 text-xs mt-1">Zero landfill policy</p>
                  </div>
                </div>

              </div>

              {/* Dark Bento: Progress Bars */}
              <div className="bg-[#072a15] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group/bars border border-[#0F7A4D]/20">
                {/* Ambient Deep Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0F7A4D]/40 via-transparent to-transparent opacity-80"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#3BCA6D]/20 rounded-full blur-3xl group-hover/bars:bg-[#3BCA6D]/30 transition-colors duration-700"></div>

                <div className="relative z-10 flex flex-col h-full justify-center gap-8">
                  
                  {/* Bar 1 */}
                  <div>
                    <div className="flex justify-between items-end mb-3 text-white">
                      <span className="font-bold tracking-wide text-[15px]">Recycling Service</span>
                      <span className="font-bold text-xs text-[#3BCA6D] bg-[#3BCA6D]/10 px-2 py-1 rounded">100%</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden shadow-inner backdrop-blur-sm border border-white/5">
                       <div 
                         className="h-full bg-gradient-to-r from-[#0F7A4D] to-[#3BCA6D] rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(59,202,109,0.5)]" 
                         style={{ width: isVisible ? '100%' : '0%', transition: 'width 2s cubic-bezier(0.25, 1, 0.5, 1)' }}
                       >
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></div>
                       </div>
                    </div>
                  </div>

                  {/* Bar 2 */}
                  <div>
                    <div className="flex justify-between items-end mb-3 text-white">
                      <span className="font-bold tracking-wide text-[15px]">Waste Management</span>
                      <span className="font-bold text-xs text-[#3BCA6D] bg-[#3BCA6D]/10 px-2 py-1 rounded">100%</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden shadow-inner backdrop-blur-sm border border-white/5">
                       <div 
                         className="h-full bg-gradient-to-r from-[#0F7A4D] to-[#3BCA6D] rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(59,202,109,0.5)]" 
                         style={{ width: isVisible ? '100%' : '0%', transition: 'width 2s cubic-bezier(0.25, 1, 0.5, 1) 0.2s' }}
                       >
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_2s_infinite] delay-500"></div>
                       </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes soft-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-soft-float {
          animation: soft-float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
