'use client';
import React from 'react';
import Link from 'next/link';
const plans = [
  {
    name: 'Free',
    price: '₹0',
    features: [
      'Access to basic resources',
      'Community support',
      'Limited tutorials',
    ],
     label: <Link href="/plans/contactsales"  target='_blank'>Get Started</Link>,
    buttonText: '',
  },
  {
    name: 'Pro',
    price: '₹499/month',
    features: [
      'All Free features',
      'Unlimited tools & cheats',
      'Priority support',
      'Exclusive tutorials',
    ],
    label: <Link href="/plans/upgrade" target='_blank'>Upgrade Now</Link>,
    buttonText: ' ',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'Custom integrations',
      'Team management',
    ],
     label: <Link href="/plans/get-started"  target='_blank'>Contact Sales</Link>,
    buttonText: '',
  },
];

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-600">Flexible pricing for every need</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="animate-price mb-6 text-3xl font-extrabold">
                {plan.price}
              </div>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button  className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              {plan.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
