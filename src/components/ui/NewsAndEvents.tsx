import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsAndEvents() {
  const [activeDateIndex, setActiveDateIndex] = useState(4);
  const [startIndex, setStartIndex] = useState(2);
  
  const calendarDates = [
    { day: '15', month: 'Jun' },
    { day: '10', month: 'Jul' },
    { day: '3', month: 'Aug' },
    { day: '28', month: 'Feb' },
    { day: '28', month: 'Nov' },
    { day: '1', month: 'Jan' },
    { day: '14', month: 'Mar' },
    { day: '22', month: 'Apr' }
  ];

  const visibleDates = calendarDates.slice(startIndex, startIndex + 4);

  const handlePrevDate = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextDate = () => {
    if (startIndex + 4 < calendarDates.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0a1c11] mb-10 font-serif tracking-tight">
          News & Events
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Column 1: Featured Event */}
          <div className="flex flex-col rounded-[1.5rem] overflow-hidden bg-[#0a1c11] shadow-xl group cursor-pointer transition-transform hover:-translate-y-1 duration-500">
            <div className="w-full h-[250px] sm:h-[300px] lg:h-[220px] xl:h-[260px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
                alt="Featured Event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow">
              <span className="text-gray-400 text-sm font-semibold tracking-wider mb-2 block">Events</span>
              <h3 className="text-white text-lg sm:text-xl font-bold leading-snug group-hover:text-eco transition-colors">
                Global Sustainability Summit 2026 – Induction Program for Partners
              </h3>
            </div>
          </div>

          {/* Column 2: News List */}
          <div className="flex flex-col bg-[#f4f8f5] rounded-[1.5rem] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-5 flex-grow">
              
              {/* Item 1 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=300&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium mb-1 block">28 Nov, 2026</span>
                  <h4 className="text-[#0a1c11] font-bold text-sm sm:text-[15px] leading-tight group-hover:text-eco transition-colors">
                    One-Day Workshop on Circular Economy
                  </h4>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium mb-1 block">26 Nov, 2026</span>
                  <h4 className="text-[#0a1c11] font-bold text-sm sm:text-[15px] leading-tight group-hover:text-eco transition-colors">
                    Legal Aid Cell Commemorates the Green Act
                  </h4>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium mb-1 block">20 Nov, 2026</span>
                  <h4 className="text-[#0a1c11] font-bold text-sm sm:text-[15px] leading-tight group-hover:text-eco transition-colors">
                    Eco Green Unveils New Solar Farm Initiative
                  </h4>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=300&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-gray-500 text-xs sm:text-sm font-medium mb-1 block">18 Nov, 2026</span>
                  <h4 className="text-[#0a1c11] font-bold text-sm sm:text-[15px] leading-tight group-hover:text-eco transition-colors">
                    Launch of City-Wide Recycling Campaign
                  </h4>
                </div>
              </div>

            </div>
            <div className="mt-8 text-center">
              <button className="text-[#0a1c11] font-extrabold text-sm sm:text-[15px] tracking-wide hover:text-eco transition-colors">
                Know More
              </button>
            </div>
          </div>

          {/* Column 3: Event Calendar */}
          <div className="flex flex-col bg-[#051009] rounded-[1.5rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-eco/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <h3 className="text-center text-white text-2xl font-serif mb-6 relative z-10">
              Event Calendar
            </h3>
            
            {/* Date Selector */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <button 
                onClick={handlePrevDate} 
                className={`transition-colors ${startIndex === 0 ? 'text-white/20 cursor-default' : 'text-white hover:text-eco'}`}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-6 sm:gap-8 text-center">
                {visibleDates.map((date, idx) => {
                  const actualIndex = startIndex + idx;
                  return (
                    <div 
                      key={actualIndex}
                      onClick={() => setActiveDateIndex(actualIndex)}
                      className={`flex flex-col items-center cursor-pointer transition-opacity ${
                        activeDateIndex === actualIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <span className="text-white font-bold text-lg leading-tight">{date.day}</span>
                      <span className={activeDateIndex === actualIndex ? "text-white text-xs font-medium" : "text-gray-400 text-xs"}>{date.month}</span>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={handleNextDate} 
                className={`transition-colors ${startIndex + 4 >= calendarDates.length ? 'text-white/20 cursor-default' : 'text-white hover:text-eco'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-6 relative z-10"></div>

            {/* Scrollable Events List */}
            <div className="flex flex-col gap-5 flex-grow max-h-[280px] overflow-y-auto pr-2 relative z-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-eco/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-eco transition-colors">
              
              {/* Event Item 1 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80" alt="Calendar Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-eco text-[11px] sm:text-xs font-bold mb-1 block">08 Dec, 2025</span>
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-eco transition-colors">
                    One-Day Workshop
                  </h4>
                </div>
              </div>

              {/* Event Item 2 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=200&q=80" alt="Calendar Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-eco text-[11px] sm:text-xs font-bold mb-1 block">28 Nov, 2025</span>
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-eco transition-colors">
                    One-Day Workshop
                  </h4>
                </div>
              </div>

              {/* Event Item 3 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&q=80" alt="Calendar Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-eco text-[11px] sm:text-xs font-bold mb-1 block">26 Nov, 2025</span>
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-eco transition-colors">
                    One-Day Workshop
                  </h4>
                </div>
              </div>

              {/* Event Item 4 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80" alt="Calendar Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-eco text-[11px] sm:text-xs font-bold mb-1 block">20 Nov, 2025</span>
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-eco transition-colors">
                    Cultural Fest 2025
                  </h4>
                </div>
              </div>
              
              {/* Event Item 5 */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=200&q=80" alt="Calendar Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div>
                  <span className="text-eco text-[11px] sm:text-xs font-bold mb-1 block">15 Nov, 2025</span>
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-eco transition-colors">
                    Green Summit
                  </h4>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
