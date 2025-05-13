import React from "react";

export default function Tools() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🛠️ Developer Tools</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">JSON Formatter</h2>
          <p>Paste and beautify your JSON data easily.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Color Picker</h2>
          <p>Pick HEX/RGB codes and explore color palettes.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Lorem Ipsum Generator</h2>
          <p>Generate dummy text for UI mockups.</p>
        </div>
      </div>
    </div>
  );
}
