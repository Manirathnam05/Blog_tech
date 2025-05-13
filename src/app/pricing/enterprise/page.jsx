'use client';
import React from 'react';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
        <p className="text-lg text-gray-600 mb-10">
          Tailored solutions for teams, businesses, and organizations that need more than just a standard plan.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">What’s Included</h2>
        <ul className="space-y-4 text-gray-700">
          <li>🚀 Dedicated Account Manager</li>
          <li>🛠️ Custom Tool & Resource Integration</li>
          <li>🔐 Enhanced Security and Compliance</li>
          <li>📞 Priority 24/7 Support</li>
          <li>👥 Multi-user Team Management</li>
          <li>📊 Custom Analytics & Usage Reports</li>
        </ul>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Flexible Pricing</h3>
          <p className="text-gray-600">
            Pricing is based on your specific requirements and usage. Contact us for a custom quote.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:sales@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
