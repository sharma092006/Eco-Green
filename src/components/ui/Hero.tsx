import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    subtitle: "REDUCE | REUSE | RECYCLE",
    title: "Turning Waste into Value",
    highlight: "Waste",
    description: "At Eco Green, we lead the way with cutting-edge technologies and sustainable practices. Our commitment to innovation drives us to continually improve our waste management solutions and support the circular economy.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "READ MORE",
    secondaryBtn: "QUICK CONTACT",
  },
  {
    subtitle: "PROTECT | PRESERVE | PROSPER",
    title: "Protecting Our Ecosystem",
    highlight: "Ecosystem",
    description: "Join us in shaping a greener tomorrow through our forward-thinking approaches and dedicated environmental stewardship. Together, we can preserve nature's beauty for future generations.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "OUR INITIATIVES",
    secondaryBtn: "GET INVOLVED",
  },
  {
    subtitle: "INNOVATE | INTEGRATE | INSPIRE",
    title: "Clean Energy Solutions",
    highlight: "Energy",
    description: "Harnessing the power of the sun and wind. We provide cutting-edge clean energy technology to reduce carbon footprints and transition to a fully sustainable infrastructure.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "DISCOVER MORE",
    secondaryBtn: "CONSULT EXPERTS",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800); // match transition duration
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-gray-900">
      
      {/* Full Section Background Carousel */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
          }`}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none"></div>
          
          <img 
            src={slide.image} 
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1500px] mx-auto h-full flex items-center px-4 sm:px-6 xl:px-12">
        
        {/* 3 Circular Thumbnails Sidebar */}
        <div className="absolute right-0 sm:right-2 xl:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer" 
              onClick={() => goToSlide(index)}
            >
              <div 
                className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full overflow-hidden border-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  index === currentSlide 
                    ? 'border-eco scale-110 shadow-[0_0_20px_rgba(15,122,77,0.5)] opacity-100' 
                    : 'border-gray-400/50 scale-100 opacity-60 hover:opacity-100 hover:scale-105 hover:border-gray-300'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-[1500ms] ${
                    index === currentSlide ? 'scale-110' : 'scale-100 group-hover:scale-110'
                  }`}
                />
              </div>
              
              {/* Premium Progress Ring for Active Thumbnail */}
              {index === currentSlide && (
                <svg className="absolute -inset-[6px] sm:-inset-[6px] lg:-inset-[7px] w-[calc(100%+12px)] sm:w-[calc(100%+12px)] lg:w-[calc(100%+14px)] h-[calc(100%+12px)] sm:h-[calc(100%+12px)] lg:h-[calc(100%+14px)] -rotate-90 animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#0F7A4D" strokeWidth="2.5" strokeDasharray="140 160" strokeLinecap="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="w-full pr-16 sm:pr-24 lg:pr-32">
          <div className="grid grid-cols-1 w-full max-w-3xl">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 translate-y-12 pointer-events-none"
                }`}
              >
                <div className="inline-block mb-4 sm:mb-6">
                  <span className="bg-eco/90 text-white font-bold text-xs sm:text-sm tracking-[0.2em] py-2 px-4 rounded-full backdrop-blur-sm shadow-lg">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl xl:text-[4rem] font-black text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight drop-shadow-xl">
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-eco drop-shadow-[0_0_15px_rgba(15,122,77,0.8)]">{slide.highlight}</span>
                  {slide.title.split(slide.highlight)[1]}
                </h1>
                
                <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-xl leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="bg-eco hover:bg-eco-dark text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded font-bold tracking-wide text-sm sm:text-base shadow-[0_4px_14px_0_rgba(15,122,77,0.39)] hover:shadow-[0_6px_20px_rgba(15,122,77,0.23)] hover:-translate-y-0.5 transition-all duration-300">
                    {slide.primaryBtn}
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded font-bold tracking-wide text-sm sm:text-base shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                    {slide.secondaryBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
