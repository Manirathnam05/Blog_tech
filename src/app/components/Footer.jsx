"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10" id="#top">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-2xl font-bold mb-3">Blog</h2>
          <p className="text-gray-400">
            Welcome to our 2025 blog – your destination for insightful articles, expert opinions, and
            resources across health, lifestyle, tech, and more. Stay informed and inspired.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: contact@blog2025.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <p className="text-gray-400 mt-2">Location: Bengaluru, India</p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 cursor-pointer right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        >
          ↑
        </button>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2025 Blog. All rights reserved.
      </div>
    </footer>
  );
}