import React from "react";

export default function CheatSheets() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">📄 Cheat Sheets</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">HTML & CSS</h2>
            <p>Quick reference for tags, flexbox, grid, and more.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">JavaScript</h2>
            <p>Common syntax, array methods, and ES6 tips.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Git Commands</h2>
            <p>Essential Git commands for everyday dev work.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">⚛️ React</h2>
          <p>Hooks, components, props, and state management tips.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📘 TypeScript</h2>
          <p>Types, interfaces, generics, and common patterns.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🐧 Linux Commands</h2>
          <p>File operations, permissions, networking, and process control.</p>
        </div>
        </div>
      </div>
    );
  }
  