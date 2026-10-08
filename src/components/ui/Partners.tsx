import React from 'react';

const partners = [
  { name: 'ITC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ITC_Limited_Logo.svg/512px-ITC_Limited_Logo.svg.png' },
  { name: 'SAMKWANG', logo: 'https://www.samkwang.com/assets/site/img/contents/logo_big.png' },
  { name: 'SINWOO', logo: 'https://www.sinwoopack.com/theme/sinwoo/img/logo.svg' },
  { name: 'vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vivo_mobile_logo.png/512px-Vivo_mobile_logo.png' },
  { name: 'oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/OPPO_Logo_%282019%29.svg/512px-OPPO_Logo_%282019%29.svg.png' },
  { name: 'asianpaints', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Asian_Paints_logo.svg/512px-Asian_Paints_logo.svg.png' },
  { name: 'Haier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Haier_logo.svg/512px-Haier_logo.svg.png' },
  { name: 'HCLTech', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/HCLTech-new-logo.svg/512px-HCLTech-new-logo.svg.png' },
  { name: 'Hindustan Unilever', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Hindustan_Unilever_Logo.svg/512px-Hindustan_Unilever_Logo.svg.png' },
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f8fcf9] py-12 lg:py-20 border-y border-gray-100/50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-12 mb-10 lg:mb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Our <span className="text-eco">Partners</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-medium">
          Partnering for Progress: Together, We Drive Sustainable Solutions and Innovation.
        </p>
      </div>

      <div className="flex overflow-hidden group gap-6 py-4">
        {[...Array(2)].map((_, i) => (
          <div 
            key={i} 
            className="flex min-w-max shrink-0 gap-6 animate-auto-scroll group-hover:[animation-play-state:paused]"
          >
            {partners.map((partner, idx) => (
              <div 
                key={`${i}-${idx}`} 
                className="w-[180px] sm:w-[220px] h-[90px] sm:h-[110px] bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-eco/30 flex items-center justify-center transition-all duration-300 cursor-pointer p-4 sm:p-6"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-bold text-base sm:text-lg text-gray-800 tracking-wide text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
