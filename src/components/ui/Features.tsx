import React from 'react';
import {
  ArrowRightCircle, ArrowRight, UserCircle,
  Landmark, Calculator, Sparkles, CheckCircle2,
  PhoneCall, FileText, Settings, LineChart, Leaf, Recycle,
  MonitorUp, BatteryCharging
} from 'lucide-react';
import bgVideo from '../../assets/video/14250107_960_540_60fps.mp4';

export default function Features() {
  return (
    <div className="w-full flex flex-col font-sans">

      {/* SECTION 2: Matches Design Reference 2 (Dark Video Layout) */}
      <section className="w-full bg-[#f8fcf9] py-6 lg:py-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-12">

          <div className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-[#070e0a] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] flex items-center">

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#070e0a] via-[#070e0a]/90 md:via-[#070e0a]/80 to-transparent"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full md:w-[85%] lg:w-[65%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

              <div className="inline-block bg-eco/20 text-eco px-3 py-1.5 rounded font-semibold text-[10px] sm:text-xs mb-3 w-fit border border-eco/30 backdrop-blur-sm">
                Waste Disposal & Recycling Solutions in Commercial & Domestic
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.1] tracking-tight font-serif">
                Your Premier Partner In The<br className="hidden sm:block" />
                <span className="text-eco italic font-light tracking-normal block mt-1">Recycling Solutions!</span>
              </h2>

              <p className="text-gray-400 text-sm leading-[1.5] mb-6 max-w-xl">
                Eco Green is a leader in sustainable waste management, dedicated to transforming waste into valuable resources. We specialize in advanced recycling solutions, efficient e-waste management, and strategic sustainability consulting. Our modern technologies and commitment to innovation ensure effective waste disposal while prioritizing environmental responsibility. By focusing on client needs and embracing cutting-edge practices, Eco Green drives positive change and supports the circular economy. Our mission is to create a cleaner, greener future through exceptional service and sustainable solutions, benefiting both our clients and the environment.
              </p>



              <button className="bg-[#0F7A4D] hover:bg-white hover:text-gray-900 text-white px-6 py-2.5 rounded font-bold tracking-widest text-xs flex items-center gap-2 w-fit transition-all duration-300">
                READ MORE <ArrowRightCircle size={16} />
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Solutions We Offer (Premium Cards Layout) */}
      <section className="w-full bg-[#f4f8f5] py-10 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12">

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Solutions <span className="text-eco">We Offer</span>
            </h2>
            <p className="text-gray-500 text-base">
              Comprehensive Solutions for a Cleaner, Greener Future
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1: E-Waste */}
            <div className="group relative h-[420px] sm:h-[460px] w-full rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer">

              {/* Full Background Image */}
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80"
                alt="E-Waste"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95"></div>

              {/* Top Bar: Glass Badge & Number */}
              <div className="absolute top-6 left-6 right-8 flex justify-between items-start z-20">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                  <MonitorUp size={24} className="stroke-[2]" />
                </div>
                <div className="text-white font-bold text-5xl font-serif tracking-tighter transition-colors duration-500 group-hover:text-eco">
                  01
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end">

                {/* Title */}
                <h3 className="text-2xl sm:text-[1.75rem] font-bold text-white mb-2 leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                  E-Waste Recycling
                </h3>

                {/* Expanding Content Container (Uses Grid trick for smooth height animation) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-1">
                      <p className="text-gray-300 text-sm leading-[1.65] mb-6">
                        Eco Green specializes in secure e-waste recycling, ensuring responsible disposal of outdated electronics. We focus on data protection and environmental sustainability...
                      </p>

                      {/* Button */}
                      <div className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase group/btn">
                        <span className="bg-eco w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 shadow-[0_5px_15px_rgba(15,122,77,0.4)]">
                          <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                        Discover More
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Lithium Battery */}
            <div className="group relative h-[420px] sm:h-[460px] w-full rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer">

              <img
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Battery Recycling"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95"></div>

              <div className="absolute top-6 left-6 right-8 flex justify-between items-start z-20">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                  <BatteryCharging size={24} className="stroke-[2]" />
                </div>
                <div className="text-white font-bold text-5xl font-serif tracking-tighter transition-colors duration-500 group-hover:text-eco">
                  02
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end">

                <h3 className="text-2xl sm:text-[1.75rem] font-bold text-white mb-2 leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                  Lithium Battery
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-1">
                      <p className="text-gray-300 text-sm leading-[1.65] mb-6">
                        Eco Green offers specialized lithium battery recycling services, ensuring safe and eco-friendly disposal. We recover valuable materials and mitigate environmental impact...
                      </p>

                      <div className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase group/btn">
                        <span className="bg-eco w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 shadow-[0_5px_15px_rgba(15,122,77,0.4)]">
                          <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                        Discover More
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 3: Plastic Recycling */}
            <div className="group relative h-[420px] sm:h-[460px] w-full rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer">

              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80"
                alt="Plastic Recycling"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95"></div>

              <div className="absolute top-6 left-6 right-8 flex justify-between items-start z-20">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                  <Recycle size={24} className="stroke-[2]" />
                </div>
                <div className="text-white font-bold text-5xl font-serif tracking-tighter transition-colors duration-500 group-hover:text-eco">
                  03
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end">

                <h3 className="text-2xl sm:text-[1.75rem] font-bold text-white mb-2 leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                  Plastic Recycling
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-1">
                      <p className="text-gray-300 text-sm leading-[1.65] mb-6">
                        Eco Green provides comprehensive plastic recycling solutions, transforming waste into reusable materials. Our advanced processes reduce environmental impact...
                      </p>

                      <div className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase group/btn">
                        <span className="bg-eco w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 shadow-[0_5px_15px_rgba(15,122,77,0.4)]">
                          <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                        Discover More
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
