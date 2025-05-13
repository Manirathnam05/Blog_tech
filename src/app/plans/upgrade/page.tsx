'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function UpgradePage() {
  const loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your real Razorpay Key ID
      amount: 49900, // ₹499 in paise
      currency: 'INR',
      name: 'MyCompany',
      description: 'Pro Plan Subscription',
      image: '/logo.png',
      handler: function (response: any) {
        alert('✅ Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
      },
      method: {
        upi: true,
      },
      theme: {
        color: '#3b82f6',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Upgrade to Pro</h1>
        <p className="text-center text-gray-600 mb-6">Only ₹499/month. Choose your UPI app below:</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="flex items-center justify-center border rounded-lg p-3 hover:bg-gray-50">
            <img src="/assests/Bhim.png" className="h-6" />
          </button>
          <button className="flex items-center justify-center border rounded-lg p-3 hover:bg-gray-50">
            <img src="/assests/phonepe.png" alt="PhonePe" className="h-10 w-20" />
          </button>
          <button className="flex items-center justify-center border rounded-lg p-3 hover:bg-gray-50">
            <img src="/assests/image.png" alt="Paytm" className="h-10 w-20" />
          </button>
          <button className="flex items-center justify-center border rounded-lg p-3 hover:bg-gray-50">
            <img src="/assests/Gpay.png" alt="Google Pay" className="h-10 w-20" />
          </button>
        </div>

        <button
          onClick={handlePayment}
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Pay ₹499 via UPI
        </button>

        <p className="mt-4 text-sm text-center text-blue-500 hover:underline cursor-pointer">
          How to pay using UPI?
        </p>
      </div>
    </div>
  );
}
