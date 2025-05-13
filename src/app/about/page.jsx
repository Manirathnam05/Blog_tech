'use client';
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex justify-center flex-col items-center p-20 z-10 shadow-2xl my-10 shadow-gray-600">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Welcome to my blog! I'm a passionate developer and lifelong learner who loves to write about web technologies, personal growth, and everything in between.
      </p>
      <p className="mb-6">
        This blog is my digital journal where I share tutorials, thoughts, and projects. Whether you're a fellow coder or just curious, I'm glad you're here!
      </p>
      <Link href="/">
        <button className="bg-black px-6 py-2 text-white font-bold cursor-pointer border rounded-3xl hover:bg-gray-800 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default About;
