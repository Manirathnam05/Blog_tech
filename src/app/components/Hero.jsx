'use client';

import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const Hero = () => {
  const [input, setInput] = useState("");

  const handleSubscribe = () => {
    if (input.trim() && input.includes('@')) {
      message.success(`Thanks for subscribing: ${input}`, 3);
      setInput("");
    } else {
      message.error("Please enter a valid email address.", 3);
    }
  };

  return (
    <section className="bg-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1 w-full text-center md:text-left" id="marquee-wrapper">
            <h2 className="md:text-3xl md:font-bold text-xl" id="marquee-text">
              TechTide Blog
            </h2>
          </div>

         
          <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row justify-end items-stretch md:items-center gap-2">
            <div className="w-full ">
              <Input
                type="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your email"
                size="middle"
                className="w-full md:w-{400}"
                onPressEnter={handleSubscribe}
              />
            </div>
            <Button
              type="primary"
              style={{ backgroundColor: "black" }}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="mt-2 text-right">
          <small className="text-gray-500 text-xs">
            New product features, the latest technology, solutions, and updates
          </small>
        </div>
      </div>
    </section>
  );
};

export default Hero;
