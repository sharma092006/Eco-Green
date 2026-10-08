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
    <section className="w-full py-12 lg:py-16 bg-[#fafafa] font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked <span className="text-eco">Questions</span>
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
            Find quick answers to your questions about our admission process, our fees, and support.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-[13px] font-semibold tracking-wide ${
                activeTab === tab.id
                  ? 'bg-eco text-white shadow-md'
                  : 'bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <tab.icon size={15} className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Accordion Questions */}
          <div className="flex flex-col border border-gray-200/60 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden divide-y divide-gray-100">
            {(faqData[activeTab] || []).map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="group">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50/50 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-eco/50 font-mono text-[13px] font-bold w-6 mt-0.5">
                        {faq.id}
                      </span>
                      <span className={`font-semibold text-[14px] sm:text-[15px] transition-colors duration-300 pr-4 ${isOpen ? 'text-eco' : 'text-gray-800 group-hover:text-gray-900'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'text-eco rotate-180' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pl-[44px] pr-6">
                        <p className="text-gray-500 text-[14px] leading-relaxed">
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
          <div className="w-full">
            <div className="bg-gradient-to-b from-[#0d472a] to-[#09361f] rounded-[2rem] p-7 shadow-xl relative overflow-hidden group">
              
              {/* Minimal Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3BCA6D]/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-[14px] bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                   <MessageSquare size={20} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  Still have questions?
                </h3>
                
                <p className="text-gray-300 text-[13.5px] leading-relaxed mb-8">
                  Our team is ready to help you with service guarantees, pricing, and custom plans tailored to your specific needs.
                </p>

                <button className="w-full bg-white hover:bg-gray-50 text-[#0d472a] font-bold text-[14px] py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-8 shadow-md">
                   Talk to Support <ArrowRight size={16} />
                </button>

                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-white font-bold text-lg mb-0.5">24/7</div>
                    <div className="text-white/60 text-[9px] font-semibold uppercase tracking-[0.15em]">Support</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-0.5">&lt;2h</div>
                    <div className="text-white/60 text-[9px] font-semibold uppercase tracking-[0.15em]">Response</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-0.5">99%</div>
                    <div className="text-white/60 text-[9px] font-semibold uppercase tracking-[0.15em]">Satisfied</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
