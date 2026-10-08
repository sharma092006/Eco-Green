import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    category: "Commercial, Industrial",
    title: "Copper",
    desc: "More than 35 million tons of plastics were generated in the United States and only 8.7 percent was recycled.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Industrial, Commercial",
    title: "Alluminum",
    desc: "Their primary purpose is to ship normal packages in basically the same ways that the postal service does.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Residential, Industrial",
    title: "Iron",
    desc: "In 2018, 3.9 million tons of aluminum municipal waste was generated. The total recycling rate was 34.9 percent.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Residential, Commercial",
    title: "Plastic",
    desc: "Paper makes up 23 percent of municipal solid waste generated each year, more than any other material.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Products() {
  const [activeDot, setActiveDot] = useState(0);
  const [totalDots, setTotalDots] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const calculateDots = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const cardWidth = container.firstElementChild?.clientWidth || 1;
    const maxIndex = Math.round(maxScroll / cardWidth);
    setTotalDots(maxIndex + 1);
  };

  useEffect(() => {
    // Initial calculation needs a slight delay to ensure DOM is fully rendered
    const timeout = setTimeout(calculateDots, 100);
    window.addEventListener('resize', calculateDots);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', calculateDots);
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 1;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeDot) {
      setActiveDot(newIndex);
    }
  };

  useEffect(() => {
    if (isHovered || !scrollRef.current) return;
    
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollToDot = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#f8fcf9] py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-eco">Products</span>
          </h2>
          <p className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
            Innovative Solutions, Quality Results: Discover the Value in Our Recycled Products.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scroll Track */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 lg:gap-8 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, idx) => (
              <div 
                key={idx} 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] flex-shrink-0 snap-start h-auto group"
              >
                <div className="w-full flex flex-col relative h-full pb-6 pt-2">
                  
                  {/* Ultra-Premium Light Frosted Card */}
                  <div className="relative w-full h-[400px] sm:h-[420px] group/card rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(15,122,77,0.15)] bg-white">
                    
                    {/* Clear, Sharp Image Background */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:scale-105"
                      />
                    </div>
                      
                    {/* Elegant Category Pill */}
                    <div className="absolute top-5 left-5 z-20">
                      <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-black text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm">
                        {product.category.split(',')[0]}
                      </div>
                    </div>

                    {/* Subtle Transparent Glass Content Panel */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                      <div className="bg-black/40 backdrop-blur-sm rounded-[2rem] p-5 sm:p-7 shadow-lg border border-white/20 transition-colors duration-500 group-hover/card:bg-black/50">
                          
                        <h3 className="text-white text-xl sm:text-[1.5rem] font-bold tracking-tight mb-2 group-hover/card:text-eco transition-colors duration-300">
                          {product.title}
                        </h3>
                          
                        <p className="text-gray-200 text-xs sm:text-[13px] leading-[1.6] line-clamp-2 mb-5 font-medium">
                          {product.desc}
                        </p>
                          
                        {/* Interactive Action Area */}
                        <div className="flex items-center gap-4 group/btn cursor-pointer">
                          <span className="text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover/btn:text-eco transition-colors duration-300">
                            Explore
                          </span>
                            
                          {/* Animated Line */}
                          <div className="h-[1px] flex-grow bg-white/30 relative overflow-hidden">
                              <div className="absolute top-0 left-0 h-full w-full bg-eco transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-out"></div>
                          </div>
                            
                          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-eco group-hover/btn:border-eco group-hover/btn:shadow-[0_0_15px_rgba(59,202,109,0.3)] flex-shrink-0">
                            <ArrowRight size={14} className="text-white transform group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: totalDots }).map((_, dot) => (
              <button 
                key={dot}
                onClick={() => scrollToDot(dot)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeDot === dot 
                    ? 'bg-eco w-8 shadow-[0_0_10px_rgba(15,122,77,0.4)]' 
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Global styles to hide scrollbar for webkit browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
}
