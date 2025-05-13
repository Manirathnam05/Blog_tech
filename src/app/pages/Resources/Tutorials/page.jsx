import React from "react";

export default function Tutorials() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">📚 Tutorials</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Build a Portfolio with Next.js</h2>
            <p>Step-by-step tutorial for creating a personal portfolio website.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Todo App with React & Tailwind</h2>
            <p>Learn how to structure a simple task manager app with modern tools.</p>
          </div>
        </div>
      </div>
    );
  }
  