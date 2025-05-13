'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, and PayPal for both monthly and annual plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime from your dashboard. You’ll retain access until the current billing cycle ends.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 7-day money-back guarantee on Pro plans. For enterprise contracts, terms are negotiated separately.",
  },
  {
    question: "Is GST included in the pricing?",
    answer: "Yes, all prices are inclusive of applicable GST unless otherwise specified.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer: "Absolutely! You can switch between plans at any time via your account settings.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Billing FAQs</h1>
        <p className="text-center text-gray-600 mb-12">
          Answers to common questions about billing, plans, and payments.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-700 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
