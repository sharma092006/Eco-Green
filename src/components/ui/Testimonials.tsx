import React, { useState, useRef, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. James Wilson',
    role: 'Chief of Sustainability, Global Care',
    initials: 'JW',
    content: 'The rigorous environmental protocols have set a new benchmark. Our recent hires from this program demonstrate ecological maturity years ahead of their peers.',
    fullStory: 'We initially struggled with integrating sustainable practices into our daily operations. However, the comprehensive framework provided here completely transformed our approach, resulting in a 30% reduction in overall waste within the first quarter.'
  },
  {
    name: 'Dr. Priya Kapoor',
    role: 'Lead Researcher, City EcoLab',
    initials: 'PK',
    content: 'The hands-on practical experience is incredible. I transitioned from theoretical learning to full operational confidence in a single year.',
    fullStory: 'Before this, our team lacked the practical know-how to implement large-scale recycling initiatives. The real-world scenarios and dedicated mentorship bridged that gap seamlessly, saving us years of trial and error.'
  },
  {
    name: 'Dr. David Rodriguez',
    role: 'Head of Research, QuantEdge',
    initials: 'DR',
    content: 'The dedicated research facilities are a game-changer. We\'ve seen a 3x increase in published environmental papers from our department alone.',
    fullStory: 'Having access to such state-of-the-art tools allowed us to measure emissions with unprecedented accuracy, leading directly to actionable insights that our board approved immediately.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Head, Vertex',
    initials: 'SJ',
    content: 'Eco Green has revolutionized how we handle industrial recycling. Their seamless integration and eco-conscious approach saved us thousands.',
    fullStory: 'The transition was completely frictionless. They managed the entire lifecycle of our industrial waste, turning what was once a massive liability into a streamlined, cost-effective asset.'
  },
  {
    name: 'Michael Chen',
    role: 'Facility Manager, EcoSys',
    initials: 'MC',
    content: 'A truly premium service. Not only are they reliable, but their dedication to zero-waste solutions is unmatched in the industry.',
    fullStory: 'From day one, their team has been highly communicative and proactive. They identified key areas where we were losing efficiency and helped us close those gaps within weeks.'
  }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 bg-[#0a1c11] rounded-xl border border-white/5 p-5 sm:p-6 flex flex-col relative snap-start">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      
      {/* Content */}
      <div className="text-white text-[13px] sm:text-[14px] leading-relaxed mb-4 font-medium">
        "{item.content}{!expanded && <span className="text-eco"> ...</span>}"
        
        {/* Expandable Full Story */}
        <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${expanded ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden">
            <span className="text-gray-300 block pb-2 text-[13px]">{item.fullStory}</span>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="bg-white/5 hover:bg-white/10 transition-colors rounded-full px-3 py-1.5 text-white text-[9px] font-bold tracking-widest uppercase flex items-center gap-2 w-fit mb-5"
      >
        {expanded ? 'SHOW LESS' : 'READ FULL STORY'} 
        <svg className={`w-3 h-3 transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {/* Divider */}
      <div className="h-[1px] w-full bg-white/5 mb-4 mt-auto"></div>

      {/* User Info */}
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full border border-eco flex items-center justify-center bg-[#051009]">
          <span className="text-eco font-bold text-[12px]">{item.initials}</span>
        </div>
        <div>
          <h4 className="text-white font-bold text-[13px] sm:text-[14px] tracking-wide">{item.name}</h4>
          <p className="text-gray-400 text-[11px] mt-0.5">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.children[0].clientWidth + 24; // width + gap (gap-6 = 24px)
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.children[0].clientWidth + 24;
      trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (trackRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        // If we've reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollNext();
        }
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#051009] font-sans relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h4 className="text-eco text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              TESTIMONIALS
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-xl">
              Trusted by leading industry <span className="text-eco">professionals</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
             <button 
               onClick={scrollPrev}
               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a1c11] text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
             >
                <ArrowLeft size={18} />
             </button>
             <button 
               onClick={scrollNext}
               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a1c11] text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
             >
                <ArrowRight size={18} />
             </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full scroll-smooth"
        >
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>

        {/* Dots Pagination (Visual only for aesthetics matching the image) */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          <div className="w-4 h-1.5 rounded-full bg-eco"></div>
        </div>

      </div>
    </section>
  );
}
