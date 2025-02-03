'use client'
import React, { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-mainYellow">
      <button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-[26px] font-semibold font-enriqueta text-mainBlue">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          <div className={`h-4 w-4 rounded-full border  flex items-center justify-center transition-all duration-300 ease-in-out `}>
            {isOpen ? (
              <Minus className="h-4 w-4 text-black transition-transform duration-300" />
            ) : (
              <Plus className="h-4 w-4 text-black transition-transform duration-300" />
            )}
          </div>
        </span>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ 
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
        }}
      >
        <div className="pb-6">
          <p className="text-base text-textColor font-roboto">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 md:py-8">
      <div className="">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;