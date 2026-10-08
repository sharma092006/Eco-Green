import React from 'react';
import { ArrowRight, Percent, Home, Building2, MapPin } from 'lucide-react';
import bgVideo from '../../assets/video/14250107_960_540_60fps.mp4';

const features = [
  {
    icon: Percent,
    title: '100% Eco-Friendly',
    description: 'Committed to zero-waste solutions across all operations.',
  },
  {
    icon: Home,
    title: 'Domestic Solutions',
    description: 'Comprehensive waste management for residential areas.',
  },
  {
    icon: Building2,
    title: 'Commercial Waste',
    description: 'Industrial and corporate waste handling services.',
  },
  {
    icon: MapPin,
    title: 'Pan-India Reach',
    description: 'Complete waste collection and disposal network.',
  },
];

export default function VideoBanner() {
  return (
    <section className="w-full bg-[#f8fcf9] py-4 lg:py-8">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-12">
        
        <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-[#16271c] bg-[#070e0a] flex items-center shadow-2xl">
          
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-right"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          
          {/* Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e0a] via-[#070e0a]/95 md:via-[#070e0a]/85 to-[#070e0a]/30"></div>
          
          {/* Content Container */}
          <div className="relative z-10 w-full lg:w-[60%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            
            <div className="text-[#00e57a] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3">
              Sustainable Process
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Eco-Friendly Waste <span className="text-[#00e57a] drop-shadow-[0_0_20px_rgba(0,229,122,0.3)]">Management</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl font-medium">
              Eco Green is a leader in sustainable waste management, dedicated to transforming waste into valuable resources. We specialize in advanced recycling solutions, efficient e-waste management, and strategic sustainability consulting.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mb-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-3 p-2 sm:p-3 -ml-2 rounded-lg border border-transparent hover:border-[#16271c] hover:bg-[#070e0a]/80 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md border border-[#16271c] bg-[#09150e] flex items-center justify-center text-[#00e57a] shadow-[0_0_10px_rgba(0,229,122,0.1)] group-hover:shadow-[0_0_15px_rgba(0,229,122,0.2)] group-hover:bg-[#0b1b12] transition-all duration-300">
                    <feature.icon size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-white group-hover:text-[#00e57a] font-bold text-xs mb-1 uppercase tracking-wider transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-[11px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="flex items-center group w-fit cursor-pointer">
              <span className="bg-[#050a07] border border-[#16271c] text-[#00e57a] text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded-l hover:bg-[#00e57a] hover:text-black transition-colors duration-300">
                Read More
              </span>
              <span className="bg-[#0a150e] border border-l-0 border-[#16271c] text-gray-400 px-3 py-2.5 rounded-r group-hover:text-white transition-colors duration-300">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
}
