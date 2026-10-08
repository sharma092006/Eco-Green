import React, { useState } from 'react';
import { MessageSquare, Wrench, CreditCard, Headphones, Plus, Minus, ArrowRight } from 'lucide-react';
import faqImg from '../../assets/image/faq-1.png';

const tabs = [
  { id: 'general', label: 'General', icon: MessageSquare },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'support', label: 'Support', icon: Headphones },
];

const faqData: Record<string, { id: string; question: string; answer: string }[]> = {
  general: [
    {
      id: '01',
      question: 'What exact services do you offer?',
      answer: 'We provide comprehensive waste management, electronic appliance recycling, and specialized disposal services tailored for both residential and commercial needs to help build a greener future.',
    },
    {
      id: '02',
      question: 'Are your professionals background-checked?',
      answer: 'Yes, absolutely. All our professionals undergo rigorous background checks and comprehensive training to ensure safe, reliable, and expert service delivery.',
    },
    {
      id: '03',
      question: 'Do you offer emergency services?',
      answer: 'Yes, we have a dedicated rapid-response team available 24/7 for emergency cleanup, hazardous waste management, and urgent disposal requirements.',
    },
    {
      id: '04',
      question: 'Do you provide consultation for eco-friendly practices?',
      answer: 'Yes, our sustainability experts offer comprehensive consultation services to help businesses implement green practices, optimize waste reduction, and achieve zero-landfill goals.',
    },
    {
      id: '05',
      question: 'Are you compliant with all environmental regulations?',
      answer: 'Absolutely. We strictly adhere to all local, state, and federal environmental regulations, ensuring that all our waste processing and recycling operations meet the highest ecological standards.',
    },
  ],
  services: [
    {
      id: '01',
      question: 'Do you recycle industrial scale machinery?',
      answer: 'Yes, we are fully equipped to safely dismantle, transport, and recycle large-scale industrial machinery, ensuring all hazardous components are neutralized.',
    },
    {
      id: '02',
      question: 'How do you handle sensitive data on electronics?',
      answer: 'We guarantee 100% secure data destruction for all e-waste. Devices with memory components undergo physical shredding and magnetic wiping.',
    },
    {
      id: '03',
      question: 'Can I schedule a recurring pickup?',
      answer: 'Absolutely. We offer customized weekly, bi-weekly, and monthly pickup schedules tailored specifically to your facility’s unique waste output volume.',
    },
    {
      id: '04',
      question: 'Do you provide custom waste bins for my facility?',
      answer: 'Yes, we provide specialized, color-coded bins and sorting containers at no extra rental cost for clients signed up for our recurring services.',
    },
    {
      id: '05',
      question: 'Do you offer on-site e-waste dismantling?',
      answer: 'For exceptionally large data centers or industrial clients, we can dispatch a specialized team to dismantle and securely destroy sensitive electronics on-site before transport.',
    },
  ],
  pricing: [
    {
      id: '01',
      question: 'How is the pricing calculated?',
      answer: 'Our pricing is fully transparent and based entirely on the weight and type of material collected. We provide upfront quotes with zero hidden disposal fees.',
    },
    {
      id: '02',
      question: 'Do you offer contracts for commercial clients?',
      answer: 'Yes, we provide highly discounted annual service contracts for commercial businesses, which includes free bin rentals and priority scheduling.',
    },
    {
      id: '03',
      question: 'Are there fees for hazardous materials?',
      answer: 'Certain highly volatile or restricted hazardous materials carry a processing surcharge to ensure compliant ecological neutralization and transport.',
    },
    {
      id: '04',
      question: 'Are there discounts for non-profit organizations?',
      answer: 'Yes, we strongly support our local communities and offer a dedicated 15% discount on all processing and disposal fees for registered non-profit organizations.',
    },
    {
      id: '05',
      question: 'What are the available payment methods?',
      answer: 'We accept all major credit cards, corporate bank transfers (ACH/Wire), and offer flexible Net-30 invoicing for our commercial account holders.',
    },
  ],
  support: [
    {
      id: '01',
      question: 'How fast can a support agent reach me?',
      answer: 'Our average support response time is under 2 hours during standard business days, and we have a 24-hour hotline for immediate dispatch needs.',
    },
    {
      id: '02',
      question: 'Can I track my disposal certificate?',
      answer: 'Yes. Once processing is complete, you can log into your secure client portal and download your official Certificate of Destruction for compliance reporting.',
    },
    {
      id: '03',
      question: 'What if I need to cancel a scheduled pickup?',
      answer: 'You can cancel or reschedule any standard pickup up to 12 hours prior to the dispatch time with no cancellation penalty through your dashboard.',
    },
    {
      id: '04',
      question: 'Is there a dedicated account manager for businesses?',
      answer: 'Yes, all commercial and industrial clients are assigned a dedicated account manager to ensure personalized service and single-point-of-contact support.',
    },
    {
      id: '05',
      question: 'Can I upgrade my service plan at any time?',
      answer: 'Absolutely. You can easily scale your service plan up or down directly through the client portal or by contacting your dedicated support agent.',
    },
  ]
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');
  const [openFaq, setOpenFaq] = useState<string | null>('01');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenFaq('01'); // Auto-open the first FAQ of the new tab
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-white font-sans relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-[#3BCA6D]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] bg-[#0c613d]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F7A4D] to-[#3BCA6D] drop-shadow-[0_0_15px_rgba(59,202,109,0.2)]">Questions</span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Find quick answers to your questions about our admission process, our fees, and support.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-10 border-b border-gray-100 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-lg border transition-all duration-300 text-[13px] font-bold tracking-wide uppercase ${
                activeTab === tab.id
                  ? 'bg-eco border-eco text-white shadow-[0_8px_20px_rgba(15,122,77,0.25)]'
                  : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Accordion Questions */}
          <div className="flex flex-col gap-4">
            {(faqData[activeTab] || []).map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl bg-white overflow-hidden transition-all duration-500 ${
                    isOpen 
                      ? 'border-[#3BCA6D]/30 shadow-[0_15px_40px_rgba(0,0,0,0.06)] ring-1 ring-[#3BCA6D]/10' 
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`font-bold text-[13px] px-3.5 py-2 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-[#3BCA6D]/10 text-[#0F7A4D]' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'}`}>
                        {faq.id}
                      </div>
                      <span className={`font-bold text-[15px] sm:text-base pr-4 transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 border rounded p-1.5 transition-all duration-300 ${isOpen ? 'border-[#3BCA6D]/50 text-[#0F7A4D] bg-[#3BCA6D]/10' : 'border-gray-200 text-gray-400 group-hover:text-gray-600 group-hover:border-gray-300'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className={`pb-5 pl-[68px] pr-6 transform transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'
                      }`}>
                        <p className="text-gray-500 text-[14.5px] leading-[1.8]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Premium Support Card */}
          <div className="flex justify-center w-full lg:pl-8 perspective-1000">
            <div className="w-full max-w-[420px] animate-elegant-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="bg-gradient-to-b from-[#072a15] to-[#04170b] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(7,42,21,0.3)] relative overflow-hidden group w-full transition-all duration-700 hover:shadow-[0_30px_60px_rgba(15,122,77,0.25)]">
                
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#3BCA6D]/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-[#3BCA6D]/20"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-eco/5 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-eco/15"></div>

                {/* Icon Container */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a381c] border border-white/10 flex items-center justify-center text-eco shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                     <MessageSquare size={24} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-white mb-3 tracking-tight">
                    Still have questions?
                  </h3>
                  <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.65] px-2">
                    Confused about service guarantees, pricing structures, or looking for a specific type of support? Our team is ready to help you plan your needs.
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full bg-eco hover:bg-white hover:text-gray-900 text-white font-bold text-[14px] sm:text-[15px] tracking-wide py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(59,202,109,0.3)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)] mb-8 relative overflow-hidden group/btn z-10">
                   <span className="relative z-10 flex items-center justify-center gap-2">
                     Talk to Support <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                </button>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/5 relative z-10">
                  <div>
                    <div className="text-white font-extrabold text-[1.1rem] sm:text-xl mb-1 tracking-tight">24/7</div>
                    <div className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em]">Support</div>
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-[1.1rem] sm:text-xl mb-1 tracking-tight">&lt;2h</div>
                    <div className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em]">Response</div>
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-[1.1rem] sm:text-xl mb-1 tracking-tight">99%</div>
                    <div className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em]">Satisfied</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes elegant-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .animate-elegant-float {
          animation: elegant-float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
