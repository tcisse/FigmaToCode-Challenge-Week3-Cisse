// components/Accordion.tsx
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  {
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  },
  
  // ... more faq data
];

export default function Accordion() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-2 mb-10">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </div>
  );
}


