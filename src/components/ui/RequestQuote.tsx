import React, { useState } from 'react';
import { Send, ArrowRight, Clock } from 'lucide-react';

export default function RequestQuote() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'CLIMATE', 'RESOURCES', 'ECOSYSTEMS', 'ECONOMY'];
  
  const allCards = [
    {
      category: 'CLIMATE',
      title: 'Reduce Greenhouse Effect & Carbon Emissions',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      date: 'Impact Focus'
    },
    {
      category: 'RESOURCES',
      title: 'Conserv Natural Resources for Future Generations',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80',
      date: 'Sustainability'
    },
    {
      category: 'ECOSYSTEMS',
      title: 'Protects Ecosystems and Local Biodiversity',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      date: 'Conservation'
    },
    {
      category: 'ECONOMY',
      title: 'Economic Benefits of a Circular Green Economy',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      date: 'Growth Strategy'
    }
  ];

  const categoryCards = [
    // CLIMATE Cards
    {
      category: 'CLIMATE',
      title: 'Transition to Renewable Energy Sources',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
      date: 'Clean Energy'
    },
    {
      category: 'CLIMATE',
      title: 'Urban Planning for Climate Resilience',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80',
      date: 'Smart Cities'
    },
    {
      category: 'CLIMATE',
      title: 'Carbon Capture and Storage Technologies',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      date: 'Innovation'
    },
    // RESOURCES Cards
    {
      category: 'RESOURCES',
      title: 'Innovative Water Management Solutions',
      image: 'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&w=600&q=80',
      date: 'Conservation'
    },
    {
      category: 'RESOURCES',
      title: 'Zero Waste Strategies for Businesses',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
      date: 'Efficiency'
    },
    {
      category: 'RESOURCES',
      title: 'Sustainable Agriculture and Farming',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80',
      date: 'Agriculture'
    },
    // ECOSYSTEMS Cards
    {
      category: 'ECOSYSTEMS',
      title: 'Reforestation and Habitat Restoration',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      date: 'Restoration'
    },
    {
      category: 'ECOSYSTEMS',
      title: 'Marine Life Protection Initiatives',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=600&q=80',
      date: 'Oceans'
    },
    {
      category: 'ECOSYSTEMS',
      title: 'Wildlife Conservation Programs',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      date: 'Wildlife'
    },
    // ECONOMY Cards
    {
      category: 'ECONOMY',
      title: 'Sustainable Investment and Green Bonds',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
      date: 'Finance'
    },
    {
      category: 'ECONOMY',
      title: 'Creating Green Jobs for Local Communities',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      date: 'Employment'
    },
    {
      category: 'ECONOMY',
      title: 'Corporate Sustainability Strategies',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      date: 'Corporate'
    }
  ];

  const cardsToDisplay = activeFilter === 'ALL' 
    ? allCards 
    : categoryCards.filter(c => c.category === activeFilter);

  return (
    <section className="w-full py-10 lg:py-16 bg-white font-sans px-4 sm:px-6 xl:px-12 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-eco/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch relative z-10">
        
        {/* Left Panel: Request Quote Form (Matches Image 1 Left Side) */}
        <div className="bg-[#0a1c11] rounded-[1.5rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <Send size={16} className="text-white transform -rotate-12" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-white tracking-tight leading-tight">
                Request A Quote.
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed max-w-md pl-11 sm:pl-14">
              There are various ways to reduce waste so you can have the peace of mind that you're making a positive impact.
            </p>
          </div>

          <form className="relative z-10 flex-grow flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all placeholder:text-gray-600" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">Company Name</label>
                <input type="text" placeholder="Company Name" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all placeholder:text-gray-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">Contact Number</label>
                <input type="tel" placeholder="Contact Number" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all placeholder:text-gray-600" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">E-mail</label>
                <input type="email" placeholder="E-mail Address" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all placeholder:text-gray-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">Solutions Looking For</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="text-gray-600">Select Solutions</option>
                    <option value="recycling">Recycling Service</option>
                    <option value="waste">Waste Management</option>
                    <option value="consulting">Eco Consulting</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold tracking-[0.2em] text-[#3BCA6D] uppercase block ml-1">Your Message</label>
                <input type="text" placeholder="Your Message" className="w-full bg-[#112618] border-none rounded-xl px-4 py-3 text-white text-[13px] outline-none focus:ring-1 focus:ring-eco/50 transition-all placeholder:text-gray-600" />
              </div>
            </div>

            <div className="mt-6">
              <button type="button" className="w-full bg-[#3BCA6D] hover:bg-white text-gray-900 font-extrabold text-[11px] tracking-[0.2em] uppercase py-3.5 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(59,202,109,0.25)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.3)]">
                Submit Request <Send size={14} />
              </button>
            </div>
            
            <p className="text-center text-gray-600 text-[10px] mt-1">
              By submitting, you agree to our Privacy Policy and strict confidentiality terms.
            </p>
          </form>
        </div>

        {/* Right Panel: Content Grid (Matches Image 1 Right Side with Image 2 Content) */}
        <div className="bg-[#0a1c11] rounded-[1.5rem] p-6 sm:p-8 lg:p-10 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-white tracking-tight leading-tight mb-4">
              Time To Think Recycling
            </h2>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${
                    activeFilter === filter 
                    ? 'bg-[#3BCA6D] border-[#3BCA6D] text-gray-900' 
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Cards Grid with Vertical Scrollbar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10 flex-grow max-h-[400px] lg:max-h-[420px] overflow-y-auto pr-2 sm:pr-3 pb-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#112618]/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#3BCA6D]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#3BCA6D]/70 transition-colors">
             {cardsToDisplay.map((card, idx) => (
               <div key={idx} className="bg-white rounded-[1rem] overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer">
                  {/* Card Image */}
                  <div className="h-28 sm:h-32 w-full relative overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                    {/* Category Badge overlaying image */}
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                       <span className="text-white text-[8px] font-extrabold tracking-[0.2em] uppercase">{card.category}</span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                     <div className="flex items-center gap-1.5 mb-2 text-gray-500">
                        <Clock size={10} />
                        <span className="text-[9px] font-bold tracking-[0.1em] uppercase">{card.date}</span>
                     </div>
                     <h3 className="text-gray-900 font-extrabold text-[13px] sm:text-[14px] leading-snug mb-3 group-hover:text-eco transition-colors">
                        {card.title}
                     </h3>
                     
                     <div className="mt-auto flex items-center gap-1.5 text-gray-500 group-hover:text-gray-900 transition-colors">
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Learn More</span>
                        <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform text-eco group-hover:text-gray-900" />
                     </div>
                  </div>
               </div>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}
