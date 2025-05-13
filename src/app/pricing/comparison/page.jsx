'use client';
import React from 'react';

const features = [
  { name: "Access to Resources", free: true, pro: true, enterprise: true },
  { name: "Cheat Sheets", free: true, pro: true, enterprise: true },
  { name: "Advanced Tools", free: false, pro: true, enterprise: true },
  { name: "Unlimited Tutorials", free: false, pro: true, enterprise: true },
  { name: "Team Access", free: false, pro: false, enterprise: true },
  { name: "Dedicated Support", free: false, pro: false, enterprise: true },
];

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Compare Plans</h1>
        <p className="text-gray-600 text-lg">See what’s included in each plan</p>
      </div>

      <div className="overflow-auto">
        <table className="w-full table-auto border-collapse shadow-lg bg-white rounded-xl">
          <thead>
            <tr className="bg-blue-600 text-white text-lg">
              <th className="p-4 text-left">Features</th>
              <th className="p-4">Free</th>
              <th className="p-4">Pro</th>
              <th className="p-4">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="text-center border-b">
                <td className="text-left p-4 font-medium">{feature.name}</td>
                <td className="p-4">{feature.free ? '✅' : '—'}</td>
                <td className="p-4">{feature.pro ? '✅' : '—'}</td>
                <td className="p-4">{feature.enterprise ? '✅' : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex justify-center gap-6">
        <a href="/pricing/plans" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View Plans</a>
        <a href="/pricing/enterprise" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">Contact Sales</a>
      </div>
    </div>
  );
};

export default ComparisonPage;
