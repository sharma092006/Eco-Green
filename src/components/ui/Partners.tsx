import React from 'react';

import client1 from '../../assets/image/clients-1.png';
import client2 from '../../assets/image/clients-2.png';
import client3 from '../../assets/image/clients-3.png';
import client4 from '../../assets/image/clients-4.png';
import client5 from '../../assets/image/clients-5.png';
import client6 from '../../assets/image/clients-6.png';
import client7 from '../../assets/image/clients-7.png';
import client8 from '../../assets/image/clients-8.png';
import client9 from '../../assets/image/clients-9.png';

const partners = [
  { name: 'Client 1', logo: client1 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 3', logo: client3 },
  { name: 'Client 4', logo: client4 },
  { name: 'Client 5', logo: client5 },
  { name: 'Client 6', logo: client6 },
  { name: 'Client 7', logo: client7 },
  { name: 'Client 8', logo: client8 },
  { name: 'Client 9', logo: client9 },
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f8fcf9] py-8 lg:py-10 border-y border-gray-100/50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-12 mb-6 lg:mb-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Our <span className="text-eco">Partners</span>
        </h2>
      </div>

      <div className="flex overflow-hidden group gap-4 py-2">
        {[...Array(2)].map((_, i) => (
          <div 
            key={i} 
            className="flex min-w-max shrink-0 gap-4 animate-auto-scroll group-hover:[animation-play-state:paused]"
          >
            {partners.map((partner, idx) => (
              <div 
                key={`${i}-${idx}`} 
                className="group/card w-[140px] sm:w-[170px] h-[70px] sm:h-[85px] bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100/80 hover:border-eco/20 flex items-center justify-center transition-all duration-300 cursor-pointer p-2 sm:p-3"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain scale-95 transition-transform duration-300 group-hover/card:scale-105 opacity-90 group-hover/card:opacity-100"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
