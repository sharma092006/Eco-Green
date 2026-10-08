import React from 'react';
import { Trash2, Truck, Globe, Recycle, ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="w-full relative py-12 lg:py-16 overflow-hidden">
      
      {/* Premium Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1600&q=80" 
        alt="Recycling Process Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
      />
      
      {/* Green Color Overlay (Reduced Opacity) */}
      <div className="absolute inset-0 bg-[#072a15]/85"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Custom Animations */}
        <style>{`
          @keyframes travelLine {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(250%); opacity: 0; }
          }
          .animate-travel {
            animation: travelLine 5s ease-in-out infinite;
          }
          @keyframes premiumPulse {
            0% { transform: scale(0.85); opacity: 0; border-color: rgba(59, 202, 109, 0); }
            50% { transform: scale(1.05); opacity: 0.5; border-color: rgba(59, 202, 109, 0.4); }
            100% { transform: scale(1.2); opacity: 0; border-color: rgba(59, 202, 109, 0); }
          }
          .animate-premium-pulse {
            animation: premiumPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes softFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-soft-float {
            animation: softFloat 6s ease-in-out infinite;
          }
          @keyframes shimmerText {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-shimmer-text {
            animation: shimmerText 5s linear infinite;
          }
          @keyframes buttonShine {
            0% { left: -100%; opacity: 0; }
            10% { left: 100%; opacity: 0.3; }
            100% { left: 100%; opacity: 0; }
          }
          .animate-button-shine {
            animation: buttonShine 6s infinite;
          }
        `}</style>

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 lg:mb-16">
          
          {/* Left: Titles */}
          <div className="lg:w-1/2">
            <span className="bg-gradient-to-r from-[#3BCA6D] via-white to-[#3BCA6D] bg-[length:200%_auto] text-transparent bg-clip-text animate-shimmer-text font-bold tracking-wider text-xs uppercase mb-3 block">
              RECYCLING WASTAGE SAVE ENVIRONMENT!
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight transform transition-transform duration-700 hover:translate-x-2">
              Simple Steps Wastage <br className="hidden sm:block" /> to Recycling Item Processing
            </h2>
          </div>
          
          {/* Right: Text and Buttons */}
          <div className="lg:w-5/12 flex flex-col gap-5">
            <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-500 hover:text-white">
              Recycling is the process of converting waste materials into new materials and objects. To do this, recycling often requires both machinery and employees to correctly sort recyclable items based on the material they're made of.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button className="relative overflow-hidden bg-eco hover:bg-[#0c613d] text-white px-6 py-2.5 rounded font-bold tracking-widest text-xs transition-all duration-300 shadow-[0_5px_15px_rgba(15,122,77,0.3)] hover:shadow-[0_8px_25px_rgba(15,122,77,0.5)] transform hover:-translate-y-0.5 group">
                <span className="relative z-10">GET STARTED</span>
                {/* Automatic Button Shine */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white animate-button-shine"></div>
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2.5 rounded font-bold tracking-widest text-xs transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                VIEW OUR SOLUTIONS
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Process Steps */}
        <div className="relative">
          
          {/* Dashed Connecting Line with Traveling Glow (Desktop Only) */}
          <div className="hidden lg:block absolute top-[50px] left-[12%] right-[12%] h-[2px] z-0 overflow-hidden">
            <div className="absolute inset-0 border-t-2 border-dashed border-[#3BCA6D]/30"></div>
            {/* Smooth Traveling Glow Element */}
            <div className="absolute top-[-2px] left-0 w-[40%] h-[3px] bg-gradient-to-r from-transparent via-[#3BCA6D] to-transparent animate-travel blur-[1px]"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group cursor-pointer animate-soft-float" style={{ animationDelay: '0s' }}>
              <div className="relative mb-5">
                {/* Number Badge */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#3BCA6D] text-white rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-[0_0_15px_rgba(59,202,109,0.5)] transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[0_0_25px_rgba(59,202,109,0.8)] transition-all duration-500 border-2 border-[#072a15]">
                  01
                </div>
                {/* Circle Icon Container */}
                <div className="w-[100px] h-[100px] rounded-full bg-[#0a381c] border border-eco/30 flex items-center justify-center relative z-10 group-hover:bg-eco transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(15,122,77,0.4)]">
                  <Trash2 size={36} className="text-[#3BCA6D] group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform" />
                </div>
                {/* Continuous Pulse Ring */}
                <div className="absolute inset-[-10px] rounded-full border-[2px] animate-premium-pulse pointer-events-none delay-0"></div>
                <div className="absolute inset-[-10px] rounded-full border border-[#3BCA6D]/0 group-hover:border-[#3BCA6D]/30 transition-colors duration-500 scale-90 group-hover:scale-100"></div>
              </div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2.5 group-hover:text-[#3BCA6D] transition-colors duration-300">Collection Wastage</h3>
              <p className="text-gray-400 text-[13px] leading-[1.6] max-w-[240px] group-hover:text-gray-300 transition-colors duration-300">
                Efficiently managing metal waste through our streamlined collection services ensures effective recycling and resource recovery.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group cursor-pointer animate-soft-float" style={{ animationDelay: '1.5s' }}>
              <div className="relative mb-5">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#3BCA6D] text-white rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-[0_0_15px_rgba(59,202,109,0.5)] transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[0_0_25px_rgba(59,202,109,0.8)] transition-all duration-500 border-2 border-[#072a15]">
                  02
                </div>
                <div className="w-[100px] h-[100px] rounded-full bg-[#0a381c] border border-eco/30 flex items-center justify-center relative z-10 group-hover:bg-eco transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(15,122,77,0.4)]">
                  <Truck size={36} className="text-[#3BCA6D] group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform" />
                </div>
                {/* Continuous Pulse Ring */}
                <div className="absolute inset-[-10px] rounded-full border-[2px] animate-premium-pulse pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-[-10px] rounded-full border border-[#3BCA6D]/0 group-hover:border-[#3BCA6D]/30 transition-colors duration-500 scale-90 group-hover:scale-100"></div>
              </div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2.5 group-hover:text-[#3BCA6D] transition-colors duration-300">Pickup Wastage</h3>
              <p className="text-gray-400 text-[13px] leading-[1.6] max-w-[240px] group-hover:text-gray-300 transition-colors duration-300">
                Streamlined pickup services for waste ensure timely and efficient removal, minimizing environmental impact.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group cursor-pointer animate-soft-float" style={{ animationDelay: '3s' }}>
              <div className="relative mb-5">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#3BCA6D] text-white rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-[0_0_15px_rgba(59,202,109,0.5)] transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[0_0_25px_rgba(59,202,109,0.8)] transition-all duration-500 border-2 border-[#072a15]">
                  03
                </div>
                <div className="w-[100px] h-[100px] rounded-full bg-[#0a381c] border border-eco/30 flex items-center justify-center relative z-10 group-hover:bg-eco transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(15,122,77,0.4)]">
                  <Globe size={36} className="text-[#3BCA6D] group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform" />
                </div>
                {/* Continuous Pulse Ring */}
                <div className="absolute inset-[-10px] rounded-full border-[2px] animate-premium-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-[-10px] rounded-full border border-[#3BCA6D]/0 group-hover:border-[#3BCA6D]/30 transition-colors duration-500 scale-90 group-hover:scale-100"></div>
              </div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2.5 group-hover:text-[#3BCA6D] transition-colors duration-300">Reduce Garbage</h3>
              <p className="text-gray-400 text-[13px] leading-[1.6] max-w-[240px] group-hover:text-gray-300 transition-colors duration-300">
                Minimize waste with our efficient solutions for reducing garbage and enhancing recycling efforts.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group cursor-pointer animate-soft-float" style={{ animationDelay: '4.5s' }}>
              <div className="relative mb-5">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#3BCA6D] text-white rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-[0_0_15px_rgba(59,202,109,0.5)] transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[0_0_25px_rgba(59,202,109,0.8)] transition-all duration-500 border-2 border-[#072a15]">
                  04
                </div>
                <div className="w-[100px] h-[100px] rounded-full bg-[#0a381c] border border-eco/30 flex items-center justify-center relative z-10 group-hover:bg-eco transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(15,122,77,0.4)]">
                  <Recycle size={36} className="text-[#3BCA6D] group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform" />
                </div>
                {/* Continuous Pulse Ring */}
                <div className="absolute inset-[-10px] rounded-full border-[2px] animate-premium-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute inset-[-10px] rounded-full border border-[#3BCA6D]/0 group-hover:border-[#3BCA6D]/30 transition-colors duration-500 scale-90 group-hover:scale-100"></div>
              </div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2.5 group-hover:text-[#3BCA6D] transition-colors duration-300">Recycling Process</h3>
              <p className="text-gray-400 text-[13px] leading-[1.6] max-w-[240px] group-hover:text-gray-300 transition-colors duration-300">
                Our recycling process transforms waste into valuable resources through advanced sorting, processing, and recovery techniques.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
